'use strict';

// listener
emailInput.addEventListener('keyup', insertEmailOnPreview);

console.log('>> Ready :)');
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// FUNCTION ADD EMAIL ON PREVIEW ICON EMAIL
// Añado clase "".email" al enlace de email en _contact.html
const previewLink = document.querySelector('.email');
const emailInput = document.getElementById('email');

// handler
function insertEmailOnPreview () {
    previewLink.href = `mailto:${emailInput.value}`;
};

const inputEl = document.querySelector('.fill-in__input');
const inputDefaultText = "Nombre de prueba";
const nameCardEl = document.querySelector('.full-name');

function writeCard () {
    console.log('Listener is working');
    const inputText = inputEl.value || inputDefaultText;
    nameCardEl.innerHTML =  inputText;
};

// function writeCard () {
//     console.log('Listener is working');
//     if (inputEl.value) {
//     let inputText = event.currentTarget.value;
//     nameCardEl.innerHTML =  inputText;
//     } else {
//     let inputText =  inputDefaultText;
//     nameCardEl.innerHTML =  inputText;
//     };
// };

// function writeCard () {
//     console.log('Listener is working');
//     if (!inputEl.value) {
//         let inputText =  inputDefaultText;
//         nameCardEl.innerHTML =  inputText;
//     } else {
//         let inputText = inputEl.value;
//         nameCardEl.innerHTML =  inputText;
//     };
// };

inputEl.addEventListener('keyup', writeCard);

// FUNCTION ADD EMAIL ON PREVIEW ICON EMAIL

const inputTelEl =  document.querySelector('.input__tel');
const iconMobEl = document.querySelector('.icon__link--mobile');

function insertHref () {
    console.log('Start insertHref');
    const inputTelText = inputTelEl.value;
    iconMobEl.href = `tel:${inputTelText}`;
    iconMobEl.title = `${inputTelText}`;
}

inputTelEl.addEventListener('change', insertHref);
