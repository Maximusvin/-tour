'use strict';

// Модальное окно
const aboutBtnRef = document.querySelector('.about__btn');
const modalRef = document.querySelector('.modal-backdrop');

aboutBtnRef.addEventListener('click', () => {
  modalRef.classList.toggle('activ');
});

const crossBtnRef = document.querySelector('.cross');
crossBtnRef.addEventListener('click', () => {
  modalRef.classList.remove('activ');
});

// Получение данных из формы
const inputUserNameRef = document.querySelector('.js-name');
const inputUserPassRef = document.querySelector('.js-pass');
const inputUserPassRepearRef = document.querySelector('.js-pass-repeat');
const formRef = document.querySelector('.modal__form');
const errorRef = document.querySelector('.form__subtitle');

formRef.addEventListener('submit', () => {
  event.preventDefault();
  const userName = inputUserNameRef.value;
  const userPass = inputUserPassRef.value;
  const userPassRepeat = inputUserPassRepearRef.value;

  if (userPass !== userPassRepeat) {
    errorRef.classList.add('activ');
  } else {
    errorRef.classList.remove('activ');
    modalRef.classList.remove('activ');
  }
});
