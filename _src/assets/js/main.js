'use strict';

console.log('>> Ready :)');
// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

console.log('Hola');

// elemento html

const namePreview = document.getElementById('name-preview');
const nameInput = document.getElementById('name-imput');

// handler

function addCurrentnameImput () {
    if (nameInput.value) {
        let nameText = nameInput.value;
        namePreview.innerHTML = nameText;
    }
    else {
        let nameText = 'Nombre de prueba';
        namePreview.innerHTML = nameText;
    }

    // OTRA OPCIÓN: negando el valor
    // if (!nameInput.value) {
    //     let nameText = 'Nombre de prueba';
    //     namePreview.innerHTML = nameText;
    // }
    // else {
    //     let nameText = nameInput.value;
    //     namePreview.innerHTML = nameText;
    // }
}

// listener
nameInput.addEventListener('keyup', addCurrentnameImput);
