const headerBurger = document.querySelector('.header-burger');
const popupClose = document.querySelector('.popup-close');
const popupWrapper = document.querySelector('.popup-wrapper');
const sideButton = document.querySelector('.side-button');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const headerMenu = document.querySelector('.header-menu');
const headerBody = document.querySelector('.header-body');

popupClose.onclick = () => {
  popupWrapper.classList.add('hide');
}

headerBurger.onclick = () => {
  nav.classList.toggle('show-menu');
  headerMenu.classList.toggle('show-menu-item');
  headerBurger.classList.toggle('open-menu');
  headerBody.classList.toggle('show-item');
  body.classList.toggle('lock');
}

sideButton.onclick = (evt) => {
  evt.preventDefault();
  popup.classList.remove('active');
}
