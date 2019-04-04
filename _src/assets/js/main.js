'use strict';

console.log('>> Ready :)');

const formButton = document.querySelector('.share-button');

function changeButtonColor(){

formButton.classList.add('share-button-pushed');
}

formButton.addEventListener('click', changeButtonColor);