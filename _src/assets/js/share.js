/* eslint-disable no-unused-vars */
/* eslint-disable strict */
// change button submit color and share

const formButton = document.querySelector('.share-button');
const previewIco = document.querySelector('.contact__list--rrss');
const emptyInput = document.querySelector('.fill-in__input');
const twitterEl = document.querySelector('.section__twitter');

function handlerSubmitButton(event){
  event.preventDefault();

  formButton.classList.add('share-button-pushed');
  twitterEl.classList.remove('collapsible__hidden');
    
  //if (emptyInput.value === ''){
  // previewIcon.classList.add('contact__list--rrss-default');} 
}
// añadir cambio de color en los iconos cuando su input está vacia

formButton.addEventListener('click', handlerSubmitButton);