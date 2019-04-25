/* eslint-disable no-unused-vars */
/* eslint-disable strict */

const formButton = document.querySelector('.share-button');
const previewIco = document.querySelector('.contact__list--rrss');
const emptyInput = document.querySelector('.fill-in__input');
const twitterEl = document.querySelector('.section__twitter');

function handlerSubmitButton(event){
  event.preventDefault();

  formButton.classList.add('share-button-pushed');
  twitterEl.classList.remove('collapsible__hidden');
}

formButton.addEventListener('click', handlerSubmitButton);