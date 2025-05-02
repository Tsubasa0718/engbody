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