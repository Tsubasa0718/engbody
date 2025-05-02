const accordionButtons = document.querySelectorAll('.accordion__btn');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = document.getElementById(button.getAttribute('aria-controls'));
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // 自分の状態のみ変更（他のメニューには影響しない）
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
    content.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
  });
});
