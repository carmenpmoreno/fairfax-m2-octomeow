/* eslint-disable no-console */
/* eslint-disable strict */
console.log('Hola');

let card = {
  palette: '1',
  name: 'Nombre y apellido',
  job: 'Trabajo',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

let localStorageKey = 'cacheCard';
const inputUpdateEls = document.querySelectorAll('.input-update');
console.log(inputUpdateEls);

let cacheCard = () => {
  console.log('Odio la puta caché');
  if (localStorage.cacheCard) {
    const savedCard = JSON.parse(localStorage.getItem('cacheCard'));
    console.log(savedCard);
    card.name = savedCard.name;
    card.job = savedCard.job;
    card.phone = savedCard.phone;
    card.email = savedCard.email;
    card.linkedin = savedCard.linkedin;
    card.github = savedCard.github;
    card.photo = savedCard.photo;
    card.palette = savedCard.palette;
    console.log(card);
  }
};

cacheCard();

let fillCardWithCache = () => {
  console.log('card para rellenar', card);
  for (const entry of inputUpdateEls.entries()) {
    console.log(entry[1].value); 
  }
};

fillCardWithCache();
//HACER FUNCIÓN QUE DESDE SAVEDCARD RELLENE LOS INPUTS
//EL RESET VOLVERÁ EL OBJETO AL ESTADO DE CARD INICIAL

function cardUpdate(name, value) {
  card[name] = value;
}

function finalFormHandler() {
  localStorage.setItem(localStorageKey, JSON.stringify(card));
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