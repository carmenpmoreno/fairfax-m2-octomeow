'use strict';


console.log('>> Ready :)');

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// COLLAPSIBLE FILL-IN

// Tenemos que conseguir tress cosas:
//  1. que se muestre el div "fill-in-items", cuando hagamos click en el legend y se oculten el resto de divs de share y design
//  2. que oculte ese div cuando hagamos click en el legend
//  3.que se cambie la orientación de la flecha cuando hagamos click en el legend

// *******************TO DO: 
    // hacer lo mismo con el resto de secciones
    // div en sección "share" y cambio la orientación flecha

// NOTA: AÑADO CLASES NUEVAS en la sección FILL-IN y otra para el "legend"

const containerCollapsable = document.querySelector('.container-collapsable');
const legendsForm = document.querySelector('.legend-collapsable');

// Hacer un Listener sobre el "legend" con event click
legendsForm.addEventListener('click', collapseForm);

// Crear una función handler
function collapseForm () {
    // que muestre el div si está oculto
    // TO DO:  pero entonces queoculte los divs de las otras secciones
    if (containerCollapsable.classList.contains('hidden-collapsables')) {
        containerCollapsable.classList.remove('hidden-collapsables');
    }
    else {
    //     // o que lo oculte
    containerCollapsable.classList.add('hidden-collapsables');
    }
}


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
    linkedinPreview.href= linkedinInput.value || linkedinDefaultText;
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