'use strict';

console.log('>> Ready :)');

// prueba 1: Añado clase "".email" al enlace de email en _contact.html
// const previewLink = document.querySelector('.email');

// PRUEBA 2: Pruebo a rellenar con javascript el contenido href desde input

    // Mi objetivo es el href del link ".email". Buscar otra forma de detectar elemento
const previewLink = document.element('href');

// handler
function insertEmailOnPreview() {
    const emailInput = document.querySelector('.fill-in__input');
    previewLink = emailInput.innerHTML;
}

// listener
previewLink.addEventListener('href', insertEmailOnPreview);
