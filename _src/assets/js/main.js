'use strict';

console.log('>> Ready :)');
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//pruebas collapse
const collapse = document.querySelector('.collapse');


// handler
// function addNone() {
// }
// collapse.addEventListener('click', showAlert);



//INPUT NAME
const previewName = document.querySelector('.full-name');
const inputName = document.querySelector('#full_name');
const defaultName = 'Nombre de Prueba';

function fillCardInputName() {   
   const inputNameValue = inputName.value;
   previewName.innerHTML = inputNameValue || defaultName;
}
inputName.addEventListener('keyup', fillCardInputName);



//INPUT LASTNAME
const previewJob = document.querySelector('.occupation');
const inputJob = document.querySelector('#job');
const defaultJob = 'SuperWoman';

function fillCardInputJob() {   
   const inputJobValue = inputJob.value;

   // if (inputJobValue) {
   //     previewJob.innerHTML = inputJobValue;
   // } else {
   //     previewJob.innerHTML = defaultJob;
   // }
   previewJob.innerHTML = inputJobValue || defaultJob;
}
inputJob.addEventListener('keyup', fillCardInputJob);


