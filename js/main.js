import {Slider} from './slider.js';

const skillsItems = document.querySelector('.skills').querySelectorAll('.slider__item');
const skillsList = document.querySelector('.skills__list');
const nextSkill = document.querySelector('.next__skill');
const prevSkill = document.querySelector('.prev__skill');

const hobbiesItems = document.querySelector('.hobbies').querySelectorAll('.slider__item');
const nextHobbie = document.querySelector('.next__hobbie');
const prevHobbie = document.querySelector('.prev__hobbie');
const hobbiesList = document.querySelector('.hobbies__list');

const headerBurger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');


const sliderSkill = new Slider(skillsList, skillsItems, 5);
sliderSkill.showSlide();
nextSkill.addEventListener('click', sliderSkill.nextSlide.bind(sliderSkill));
prevSkill.addEventListener('click', sliderSkill.prevSlide.bind(sliderSkill));

const sliderHobbies = new Slider(hobbiesList, hobbiesItems, 1);
sliderHobbies.showSlide();
nextHobbie.addEventListener('click', sliderHobbies.nextSlide.bind(sliderHobbies));
prevHobbie.addEventListener('click', sliderHobbies.prevSlide.bind(sliderHobbies));


headerBurger.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
    headerBurger.classList.toggle('header__burger_active');

})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav_active');
        headerBurger.classList.remove('header__burger_active');
    })
})