'use strict';

console.log('>> Ready :)');

// change button submit color

const formButton = document.querySelector('.share-button');
const previewIcon= document.querySelector('.contact__list--rrss');
const emptyInput= document.querySelector('.fill-in__input');

function changeButtonColor(event){
    event.preventDefault();

    formButton.classList.add('share-button-pushed');
    
    //if (emptyInput.value === ''){
       // previewIcon.classList.add('contact__list--rrss-default');}
    
}
// añadir cambio de color en los iconos cuando su input está vacia

formButton.addEventListener('click', changeButtonColor);





