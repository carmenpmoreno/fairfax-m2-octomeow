/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable strict */

let card = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

const inputUpdateEls = document.querySelectorAll('.input-update');
let localStorageKey = 'cacheCard';

let cacheCard = () => {
  if (localStorage.cacheCard) {
    const savedCard = JSON.parse(localStorage.getItem('cacheCard'));
    console.log(savedCard);

    inputUpdateEls.forEach(function(element) {

      const currentType = element.getAttribute('type');

      if(currentType === 'radio' && element.value === savedCard[element.name]) {
        element.checked = true;
      } else if (currentType === 'file') {
        console.log(element.nextElementSibling.style.backgroundImage);
        element.nextElementSibling.style.backgroundImage = `url(${savedCard[element.name]}`;
      } else {
        element.value = savedCard[element.name];
      }
    });
  }
};

cacheCard();


const twitterLinkEl = document.querySelector('.twitter-link');

function cardUpdate(name, value) {
  card[name] = value;
}

function finalFormHandler() {
  localStorage.setItem(localStorageKey, JSON.stringify(card));
}

function inputChangeHandler(event) {
  console.log('Emit event', event);
  const currentInput = event.currentTarget;
  const name = currentInput.name;
  const value = currentInput.value;
  cardUpdate(name, value);
  finalFormHandler();
}

for (let i = 0; i < inputUpdateEls.length; i++) {
  inputUpdateEls[i].addEventListener('change', inputChangeHandler);
}
