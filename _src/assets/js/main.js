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




/*const nameCard= document.querySelector('.full-name');
const inputName= document.querySelector('.fill-in__input');
const defaultText= "Nombre de prueba";
function writeName(){
    console.log('hola');
    if (!inputName.value){
        nameCard.innerHTML= defaultText;
    }
    else{
        nameCard.innerHTML=inputName.value;
    }
    
  //nameCard.innerHTML= inputName.value || defaultText;
} 

inputName.addEventListener('keyup', writeName);*/

//LINKEDIN

const linkedinPreview= document.querySelector('.link__linkedin');
const linkedinInput= document.getElementById('linkedin');
const linkedinDefaultText='https://www.linkedin.com';

function writeLinkedin(){
    console.log('works');
    linkedinPreview.href= linkedinInput.value || linkedinDefaultText;
};

linkedinInput.addEventListener('change', writeLinkedin);

