'use strict';

const nameCard= document.querySelector('.full-name');
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

inputName.addEventListener('keyup', writeName);

//LINKEDIN

const linkedinPreview= document.querySelector('.link__linkedin');
const linkedinInput= document.getElementById('linkedin');
const linkedinDefaultText='https://www.linkedin.com';

function writeLinkedin(){
    console.log('works');
    linkedinPreview.href= linkedinInput.value || linkedinDefaultText;
};

linkedinInput.addEventListener('change', writeLinkedin);
