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
