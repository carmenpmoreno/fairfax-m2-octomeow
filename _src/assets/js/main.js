'use strict';

console.log('>> Ready :)');
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

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
    previewJob.innerHTML = inputJobValue || defaultJob;
}
inputJob.addEventListener('keyup', fillCardInputJob);


//ADD link href gitHub
const inputLink = document.getElementById('github');
const addLink = document.getElementById('linkGithub');
const defaultLink = 'https://github.com/';
addLink.href = defaultLink;

function addMyLink() {
    addLink.href = inputLink.value || defaultLink;
}
inputLink.addEventListener('keyup', addMyLink);

