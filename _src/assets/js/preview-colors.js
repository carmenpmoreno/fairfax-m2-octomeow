/* eslint-disable no-inner-declarations */
/* eslint-disable strict */
//Color select

const cardPreviewEl = document.querySelector('.card-preview');
const palettePickerEl = document.querySelector('.option__container');
const paletteIds =[];
const paletteClasses = [];

for (let i=1; i<=3; i++){
  paletteIds.push(palettePickerEl.querySelector(`#p${i}`));
  paletteClasses.push(palettePickerEl.querySelector(`.palette--${i}`).className);
}

for (let i=0; i<=2; i++){

  function changeColor(event){
    const selectedItem = (event.currentTarget);
    const selectedItemIndex =paletteIds.indexOf(selectedItem);
    const selectedClass = paletteClasses[selectedItemIndex];
    cardPreviewEl.classList.remove('default--palette');
    for(let i = 0; i<=2; i++){
      cardPreviewEl.classList.remove(`${paletteClasses[i]}`);
    }
    cardPreviewEl.classList.add(`${selectedClass}`);
  }

  paletteIds[i].addEventListener('click', changeColor);
}