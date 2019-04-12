console.log('Hola');

let card = {
    name: 'Nombre y apellido',
    job: 'Trabajo',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
    palette: '1',
};

let localStorageKey = 'cacheCard';
const inputUpdateEls = document.querySelectorAll('.input-update');
console.log(inputUpdateEls);

let cacheCard = () => {
    console.log('Odio la puta caché');
    if (localStorage.cacheCard) {
        const savedCard = JSON.parse(localStorage.getItem('cacheCard'));
        console.log(savedCard);
    } 
}

cacheCard();

//HACER FUNCIÓN QUE DESDE SAVEDCARD RELLENE LOS INPUTS
//EL RESET VOLVERÁ EL OBJETO AL ESTADO DE CARD INICIAL

function cardUpdate(name, value) {
    card[name] = value;
}

function inputChangeHandler(event) {
    const currentInput = event.currentTarget;
    const name = currentInput.name;
    const value = currentInput.value;
    cardUpdate(name, value);
    finalFormHandler();
}

for (let i = 0; i < inputUpdateEls.length; i++) {
    inputUpdateEls[i].addEventListener('change', inputChangeHandler);
}

function finalFormHandler() {
    localStorage.setItem(localStorageKey, JSON.stringify(card));
}

// formButton.addEventListener('click', finalFormHandler);