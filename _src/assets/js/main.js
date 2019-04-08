'use strict';

console.log('>> Ready :)');

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// COLLAPSIBLES

const legendOneEl = document.querySelector('.legend1');
const legendTwoEl = document.querySelector('.legend2');
const legendThreeEl = document.querySelector('.legend3');
const collapsibleOneEl = document.querySelector('.collapsible1');
const collapsibleTwoEl = document.querySelector('.collapsible2');
const collapsibleThreeEl = document.querySelector('.collapsible3');
const arrowOneEl = document.querySelector('.arrow1');
const arrowTwoEl = document.querySelector('.arrow2');
const arrowThreeEl = document.querySelector('.arrow3');

function legendOneClickHandler() {
    console.log('Listener 1 works');
    collapsibleTwoEl.classList.remove('fill-in__items');
    collapsibleThreeEl.classList.remove('share__container');
    arrowTwoEl.classList.remove('fa-chevron-up');
    arrowThreeEl.classList.remove('fa-chevron-up');
    collapsibleOneEl.classList.toggle('option__distribution');
    if (collapsibleOneEl.classList.contains('option__distribution')) {
        arrowOneEl.classList.add('fa-chevron-up');
    } else {
        arrowOneEl.classList.remove('fa-chevron-up');
    };
}

function legendTwoClickHandler() {
    console.log('Listener 2 works');
    collapsibleOneEl.classList.remove('option__distribution');
    collapsibleThreeEl.classList.remove('share__container');
    arrowOneEl.classList.remove('fa-chevron-up');
    arrowThreeEl.classList.remove('fa-chevron-up');
    collapsibleTwoEl.classList.toggle('fill-in__items');
    if (collapsibleTwoEl.classList.contains('fill-in__items')) {
        arrowTwoEl.classList.add('fa-chevron-up');
    } else {
        arrowTwoEl.classList.remove('fa-chevron-up');
    };
}

function legendThreeClickHandler() {
    console.log('Listener 3 works');
    collapsibleOneEl.classList.remove('option__distribution');
    collapsibleTwoEl.classList.remove('fill-in__items');
    arrowOneEl.classList.remove('fa-chevron-up');
    arrowTwoEl.classList.remove('fa-chevron-up');
    collapsibleThreeEl.classList.toggle('share__container');
    if (collapsibleThreeEl.classList.contains('share__container')) {
        arrowThreeEl.classList.add('fa-chevron-up');
    } else {
        arrowThreeEl.classList.remove('fa-chevron-up');
    };
}

legendOneEl.addEventListener('click', legendOneClickHandler);
legendTwoEl.addEventListener('click', legendTwoClickHandler);
legendThreeEl.addEventListener('click', legendThreeClickHandler);


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

//Color select

const cardPreviewEl = document.querySelector('.card-preview');
const palettePickerEl = document.querySelector('.option__container');


const paletteIds =[];
const paletteClasses = [];


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
    addLink.href = defaultLink + inputLink.value || defaultLink;
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


const inputTelEl =  document.querySelector('.input__tel');
const iconMobEl = document.querySelector('.icon__link--mobile');

function insertHref () {
    console.log('Start insertHref');
    const inputTelText = inputTelEl.value;
    iconMobEl.href = `tel:${inputTelText}`;
    iconMobEl.title = `${inputTelText}`;
}

inputTelEl.addEventListener('change', insertHref);