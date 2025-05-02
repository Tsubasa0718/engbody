// header sideBtn
const Header = document.querySelector(".header");
const HeaderBtn = document.querySelector(".header__btn");
const SideBtn = document.querySelector(".sideBtn");

window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
     Header.classList.add('is-show');
     HeaderBtn.classList.add('is-show')
     SideBtn.classList.add('is-show')
     SideBtn.setAttribute('aria-hidden', 'false')
    } else{
      Header.classList.remove('is-show');
      HeaderBtn.classList.remove('is-show')
      SideBtn.classList.remove('is-show')
      SideBtn.setAttribute('aria-hidden', 'true')
    }
})

// price
const scrollLabel = document.querySelector(".price__scrollLabel");
const priceBody = document.querySelector(".price__body");

priceBody.addEventListener("scroll", () => {
  if (priceBody.scrollLeft > 50) { // 右へ50px以上スクロールしたらクラス付与
    scrollLabel.classList.add("is-hidden");
  } else if (priceBody.scrollLeft === 0) { // 左端に戻ったらクラス削除
    scrollLabel.classList.remove("is-hidden");
  }
});

