burger = document.querySelector('.burger');
nav = document.querySelector('.nav');
navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    nav.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
    navList.classList.toggle('nav-list li')
})