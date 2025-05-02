    const tabButtons = document.querySelectorAll('.tabBtn');
    const trainerPanel = document.querySelector('.trainer-aria');
    const staffPanel = document.querySelector('.staff-aria');
  
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetId = button.getAttribute('aria-controls');
      
          // すべてのボタンからis-activeクラスを削除
          tabButtons.forEach(btn => {
            btn.classList.remove('is-active');
            btn.setAttribute('aria-selected', 'false');
          });
      
          // クリックされたボタンにis-activeクラスを追加
          button.classList.add('is-active');
          button.setAttribute('aria-selected', 'true');
      
          // 表示の切り替え
          if (targetId === 'trainer') {
            trainerPanel.classList.add('is-active');
            staffPanel.classList.remove('is-active');
          } else {
            staffPanel.classList.add('is-active');
            trainerPanel.classList.remove('is-active');
          }
        });
      });
      