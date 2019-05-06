/* eslint-disable strict */

const resetButon = document.querySelector('.reset--button');
const inputResetEl = document.querySelectorAll('.fill-in__input');

const liPreviewEl = document.querySelectorAll('.contact__list--rrss');
const cardPreviewElClases = ['palette--1', 'palette--2', 'palette--3'];
const backToDefault = '';

const loopColors = () => {
  for (let k = 0; k < cardPreviewElClases.length; k++) {
    if (cardPreviewEl.classList.contains(cardPreviewElClases[k])){
      cardPreviewEl.classList.remove(cardPreviewElClases[k]);
      cardPreviewEl.classList.add('palette--1');

    }
  }
}

const loopPreview = () => {
  for (let j = 0; j < liPreviewEl.length; j++) {
    nameCardEl.innerHTML = inputDefaultText;
    jobPreview.innerHTML = defaultJob;
    liPreviewEl[j].children[0].href = backToDefault;
    iconMobEl.title = backToDefault;
    profilePreview.style.backgroundImage = 'none';
  }
}

const loopInputs = () => {
  for (let i = 0; i < inputResetEl.length; i++) {
    inputResetEl[i].value = backToDefault;
  }
  profileImage.style.backgroundImage = `url(assets/images/default-profile-pic.png)`;
}

const resetAll = () => {
  //preview
  loopPreview();
  //colors
  loopColors();
  //inputs
  loopInputs();
}

resetButon.addEventListener('click', resetAll);