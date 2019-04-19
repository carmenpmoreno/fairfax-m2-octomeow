/* eslint-disable strict */
//PHONE

const inputTelEl =  document.querySelector('.input__tel');
const iconMobEl = document.querySelector('.icon__link--mobile');

function insertHref () {
  const inputTelText = inputTelEl.value;
  iconMobEl.href = `tel:${inputTelText}`;
  iconMobEl.title = `${inputTelText}`;
}

inputTelEl.addEventListener('change', insertHref);