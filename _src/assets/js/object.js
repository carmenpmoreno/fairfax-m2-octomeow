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

function changeColorCache(option){
  const selectedItemIndex = option-1;
  const selectedClass = paletteClasses[selectedItemIndex];
  cardPreviewEl.classList.remove('default--palette');
  for(let i = 0; i<=2; i++){
    cardPreviewEl.classList.remove(`${paletteClasses[i]}`);
  }
  cardPreviewEl.classList.add(`${selectedClass}`);
}

function changeTextCache() {
  addMyLink();
  getJobValue();
  writeLinkedin();
  writeCard();
  insertHref();
}

function changeImgCache() {
  card.photo = profileImage.style.backgroundImage || `url('assets/images/default-profile-pic.png')`;
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
        changeColorCache(element.value);
      } else if (currentType === 'file') {
        console.log('file doing');
        profileImage.style.backgroundImage = card.photo;
        profilePreview.style.backgroundImage = card.photo;
      } else {
        element.value = card[element.name];
        changeTextCache();
      }
    });
  }
};

cacheCard();

function cardUpdate(event, name, value) {
  const currentType = event.currentTarget.getAttribute('type');
  if (currentType === 'file') {
    setTimeout(changeImgCache, 2000);
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
