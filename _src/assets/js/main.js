
'use strict';


console.log('>> Ready :)');

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



// NOMBRE

const inputEl = document.querySelector('.fill-in__input');
const inputDefaultText = "Nombre de prueba";
const nameCardEl = document.querySelector('.full-name');


function writeCard () {
    console.log('Listener is working');
    const inputText = inputEl.value || inputDefaultText;
    nameCardEl.innerHTML =  inputText;
};

inputEl.addEventListener('keyup', writeCard);

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


//TELEPHONE
const inputTelEl =  document.querySelector('.input__tel');
const iconMobEl = document.querySelector('.icon__link--mobile');

function insertHref () {
    console.log('Start insertHref');
    const inputTelText = inputTelEl.value;
    iconMobEl.href = `tel:${inputTelText}`;
    iconMobEl.title = `${inputTelText}`;
}

inputTelEl.addEventListener('change', insertHref);

// EMAIL

const previewLink = document.querySelector('.email');
const emailInput = document.getElementById('email');

function insertEmailOnPreview () {
    if (emailInput.value) {
        previewLink.href = `mailto:${emailInput.value}`;
    }
    else {
        previewLink.href = '';
    }
};

emailInput.addEventListener('keyup', insertEmailOnPreview);

//LINKEDIN

const linkedinPreview= document.querySelector('.link__linkedin');
const linkedinInput= document.getElementById('linkedin');
const linkedinDefaultText='https://www.linkedin.com';

function writeLinkedin(){
    console.log('works');
    linkedinPreview.href= 'https://www.'+linkedinInput.value || linkedinDefaultText;
};

linkedinInput.addEventListener('change', writeLinkedin);


//GitHub
const inputLink = document.getElementById('github');
const addLink = document.getElementById('linkGithub');
const defaultLink = 'https://github.com/';
addLink.href = defaultLink;

function addMyLink() {
    addLink.href = inputLink.value || defaultLink;
}
inputLink.addEventListener('keyup', addMyLink);

// change button submit color and share

const formButton = document.querySelector('.share-button');
const previewIcon= document.querySelector('.contact__list--rrss');
const emptyInput= document.querySelector('.fill-in__input');
const twitterEl = document.querySelector('.section__twitter');

function handlerSubmitButton(event){
    event.preventDefault();

    formButton.classList.add('share-button-pushed');
    twitterEl.classList.remove('collapsible__hidden');

    
    //if (emptyInput.value === ''){
       // previewIcon.classList.add('contact__list--rrss-default');}
    
}
// añadir cambio de color en los iconos cuando su input está vacia

formButton.addEventListener('click', handlerSubmitButton);


//COLLAPSABLES

const legendEl = document.querySelector('.legend__arrow');
const designEl= document.querySelector('.options');
const fillEl= document.querySelector('.fill-in__items');

function handlerClick (){
    console.log('eeeeee');
    if (designEl.classList.contains('collapsible__hidden')){
        designEl.classList.add('option__distribution');
        designEl.classList.remove('collapsible__hidden')
        ;
    }
    else {
        designEl.classList.add('collapsible__hidden'),
        designEl.classList.remove('option__distribution');
    }
}


legendEl.addEventListener('click', handlerClick);




//Color select

const cardPreviewEl = document.querySelector('.card-preview');
const palettePickerEl = document.querySelector('.option__container');


const paletteIds =[];
const paletteClasses = [];

for (let i=1; i<=3; i++){
    paletteIds.push(palettePickerEl.querySelector(`#p${i}`));
    paletteClasses.push(palettePickerEl.querySelector(`.palette--${i}`).className); 
};
console.log(paletteIds);
console.log(paletteClasses);

for (let i=0; i<=2; i++){

    function changeColor(event){
        //Uso current target para saber qué paleta está seleccionada
        const selectedItem = (event.currentTarget);
        //busco en qué posición está colocado en el array 
        const selectedItemIndex =paletteIds.indexOf(selectedItem);
        //añado la clase que esté en esa misma posición 
        const selectedClass = paletteClasses[selectedItemIndex];
        console.log(selectedClass);
        cardPreviewEl.classList.remove('default--palette');
        //Elimino todas las posibles clases que pudiera haber seleccionado antes
        for(let i = 0; i<=2; i++){
            cardPreviewEl.classList.remove(`${paletteClasses[i]}`);
        };
        cardPreviewEl.classList.add(`${selectedClass}`);
    };

paletteIds[i].addEventListener('click', changeColor);
}
