
'use strict';

console.log('>> Ready :)');
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const inputEl = document.querySelector('.fill-in__input');
const inputDefaultText = "Nombre de prueba";
const nameCardEl = document.querySelector('.full-name');

function writeCard () {
    console.log('Listener is working');
    const inputText = inputEl.value || inputDefaultText;
    nameCardEl.innerHTML =  inputText;
};


inputEl.addEventListener('keyup', writeCard);

const inputTelEl =  document.querySelector('.input__tel');
const iconMobEl = document.querySelector('.icon__link--mobile');

function insertHref () {
    console.log('Start insertHref');
    const inputTelText = inputTelEl.value;
    iconMobEl.href = `tel:${inputTelText}`;
    iconMobEl.title = `${inputTelText}`;
}

inputTelEl.addEventListener('change', insertHref);
//CAMPO JOB
const jobEl = document.getElementById('job');
const jobPreview = document.querySelector('.occupation');
const defaultJob = "Profesión";
jobPreview.innerHTML = defaultJob;

function getJobValue(){
    if (jobEl.value){
        jobPreview.innerHTML = jobEl.value;
    }else{
        jobPreview.innerHTML = defaultJob;
    }
}
jobEl.addEventListener('keyup', getJobValue);
