
'use strict';
//prueba change color
//Resumen: cambiar color del preview cuando se selecciones los radiobutton

//Recoger todos los radiobutton
const inputsRadio = document.querySelectorAll('.radio');

//Recoger el preview
const preview = document.getElementById('preview');

//Crear la funcion y el listener del radiobutton
//Se recorre cada input con el bucle
for (let i = 0; i < inputsRadio.length; i++) {

    //asignamos a la constante el valor de cada value
    const everyInput = inputsRadio[i];

    everyInput.addEventListener('click', function () {

        //asignamos a la constante el valor de cada radio button
        const radioValue = everyInput.value;

        //Añadir o quitar las clases en el preview según el radiobutton.
        // Por defecto verde

            //Si el value = a rojo, añadir clase roja y quitar las otras
        if (radioValue === 'red') {
            preview.classList.add('preview-red');
            preview.classList.remove('preview-blue', 'preview-green');

            //Si el value = a azul, añadir clase roja y quitar las otras
        } else if (radioValue === 'blue') {
            preview.classList.add('preview-blue');
            preview.classList.remove('preview-green', 'preview-red');

            //añadir clase green y quitar las otras
        } else {
            preview.classList.add('preview-green');
            preview.classList.remove('preview-blue', 'preview-red');
        }

    });
}



console.log('>> Ready :)');

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



// NOMBRE

const inputEl = document.querySelector('.fill-in__input');
const inputDefaultText = "Nombre de prueba";
const nameCardEl = document.querySelector('.full-name');

function writeCard() {
    console.log('Listener is working');
    const inputText = inputEl.value || inputDefaultText;
    nameCardEl.innerHTML = inputText;
};

inputEl.addEventListener('keyup', writeCard);

//CAMPO JOB
const jobEl = document.getElementById('job');
const jobPreview = document.querySelector('.occupation');
const defaultJob = "Profesión";
jobPreview.innerHTML = defaultJob;

function getJobValue() {
    if (jobEl.value) {
        jobPreview.innerHTML = jobEl.value;
    } else {
        jobPreview.innerHTML = defaultJob;
    }
}

jobEl.addEventListener('keyup', getJobValue);


//TELEPHONE
const inputTelEl = document.querySelector('.input__tel');
const iconMobEl = document.querySelector('.icon__link--mobile');

function insertHref() {
    console.log('Start insertHref');
    const inputTelText = inputTelEl.value;
    iconMobEl.href = `tel:${inputTelText}`;
    iconMobEl.title = `${inputTelText}`;
}

inputTelEl.addEventListener('change', insertHref);

// EMAIL

const previewLink = document.querySelector('.email');
const emailInput = document.getElementById('email');

function insertEmailOnPreview() {
    if (emailInput.value) {
        previewLink.href = `mailto:${emailInput.value}`;
    }
    else {
        previewLink.href = '';
    }
};

emailInput.addEventListener('keyup', insertEmailOnPreview);

//LINKEDIN

const linkedinPreview = document.querySelector('.link__linkedin');
const linkedinInput = document.getElementById('linkedin');
const linkedinDefaultText = 'https://www.linkedin.com';

function writeLinkedin() {
    console.log('works');
    linkedinPreview.href = linkedinInput.value || linkedinDefaultText;
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
const previewIcon = document.querySelector('.contact__list--rrss');
const emptyInput = document.querySelector('.fill-in__input');

function changeButtonColor(event) {
    event.preventDefault();

    formButton.classList.add('share-button-pushed');

    //if (emptyInput.value === ''){
    // previewIcon.classList.add('contact__list--rrss-default');}

}
// añadir cambio de color en los iconos cuando su input está vacia

formButton.addEventListener('click', changeButtonColor);

