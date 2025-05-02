const titleTexts = document.querySelectorAll('.mainvisual__titleText');
const mvImage = document.querySelector('.mainvisual__imageBg');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '0px'
});

titleTexts.forEach(text => observer.observe(text));
observer.observe(mvImage);