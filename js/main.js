//BURGER MENU===================
const menu = document.querySelector('.nav__menu');
const burgerBtn = document.querySelector('.bar');
const navMargin = document.querySelector('.nav');

burgerBtn.addEventListener('click', e => {
  if (menu.classList.toggle('active')) {
    navMargin.style.marginBottom = '40rem';
  } else {
    navMargin.style.marginBottom = '0rem';
  }
});
//BURGER MENU==================
