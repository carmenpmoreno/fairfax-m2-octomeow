'use strict';

console.log("hola Pat");

const fullNameEl = document.getElementById('full_name');
const fullNamePreview = document.querySelector('.full-name');
const defaultName = "Nombre de Prueba";
fullNamePreview.innerHTML= defaultName;

function getFullNameValue(){
    if(fullNameEl.value){
        fullNamePreview.innerHTML = fullNameEl.value;
    }else{
    fullNamePreview.innerHTML=defaultName;
    }
}
fullNameEl.addEventListener('keyup', getFullNameValue);
 
//CAMPO JOB
const jobEl = document.getElementById('job');
const jobPreview = document.querySelector('.occupation');
const defaultJob = "Profesión";

jobPreview.innerHTML = defaultJob;

function getJobValue(){
    if (jobEl.value){
        jobPreview.innerHTML = jobEl.value;
    }else{
        fullNamePreview.innerHTML = defaultJob;
    }
}
jobEl.addEventListener('keyup', getJobValue);

// Prueba con enlace LinkedIn


const linkedInEl = document.getElementById(linkedin);
const linkedInLink = document.getElementById('linkedin--link');
const defaultLink = 'linkedin.com';

function getLinkedInLink(){
    if (linkedInEl.value){
        linkedInLink.href = linkedInEl.value;
    }else{
        linkedInLink.href=defaultLink;
    }
}


linkedInEl.addEventListener('keyup', getLinkedInLink);
console.log(linkedInEl.value);
