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

function changeTextCache() {
  addMyLink();
  getJobValue();
  writeLinkedin();
  writeCard();
  insertHref();
}

let cacheCard = () => {
  if (localStorage.cacheCard) {
    const card = JSON.parse(localStorage.getItem('cacheCard'));
    console.log(card);
    inputUpdateEls.forEach(function(element) {
      const currentType = element.getAttribute('type');
      if(currentType === 'radio' && element.value === card[element.name]) {
        console.log(element.value, 'radio');
        element.checked = true;
      } else if (currentType === 'file') {
        console.log('file doing');
      } else {
        element.value = card[element.name];
        changeTextCache();
      }
    });
  }
};

cacheCard();

function changeImgCache() {
  card.photo = profileImage.style.backgroundImage;
}

const twitterLinkEl = document.querySelector('.twitter-link');

function cardUpdate(event, name, value) {
  const currentType = event.currentTarget.getAttribute('type');
  if (currentType === 'file') {
    setTimeout(changeImgCache(), 2000);
  } else {
    card[name] = value;
  }
}

function finalFormHandler() {
  localStorage.setItem(localStorageKey, JSON.stringify(card));
}

function inputChangeHandler(event) {
  const currentInput = event.currentTarget;
  const name = currentInput.name;
  const value = currentInput.value;
  cardUpdate(event, name, value);
  finalFormHandler();
}

for (let i = 0; i < inputUpdateEls.length; i++) {
  inputUpdateEls[i].addEventListener('change', inputChangeHandler);
}
