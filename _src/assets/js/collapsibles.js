/* eslint-disable strict */
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
  }
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
  }
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
  }
}

legendOneEl.addEventListener('click', legendOneClickHandler);
legendTwoEl.addEventListener('click', legendTwoClickHandler);
legendThreeEl.addEventListener('click', legendThreeClickHandler);

