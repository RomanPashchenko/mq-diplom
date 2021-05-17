const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.getElementById('navi');
const body = document.querySelector('body');
const pcInfo = document.querySelector('div.pcinfo');
const dropdownActions = document.querySelector('.dropdown-actions');
const navLiA = document.querySelector('#nav li');

headerBurger.onclick = () => {
    headerBurger.classList.toggle('open-menu');
    headerMenu.classList.toggle('show-nav');
    body.classList.toggle('lock');
}

pcInfo.appendChild(dropdownActions);

navLiA.onclick = () => {
    headerMenu.classList.remove('show-nav');
    body.classList.remove('lock');
}

console.log(navLiA);
