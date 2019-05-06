/* eslint-disable strict */
const cardPreviewEl = document.querySelector('.card-preview');
const palettePickerEl = document.querySelector('.option__container');
const paletteIds = [];
const paletteClasses = [];
const secondOption = 2;
const thirdOption = 3;

for (let i = 1; i <= thirdOption; i++) {
  paletteIds.push(palettePickerEl.querySelector(`#p${i}`));
  paletteClasses.push(
    palettePickerEl.querySelector(`.palette--${i}`).className
  );
}

for (let i = 0; i <= secondOption; i++) {
  const changeColor = event => {
    const selectedItem = event.currentTarget;
    const selectedItemIndex = paletteIds.indexOf(selectedItem);
    const selectedClass = paletteClasses[selectedItemIndex];
    cardPreviewEl.classList.remove('default--palette');

    for (let i = 0; i <= secondOption; i++) {
      cardPreviewEl.classList.remove(`${paletteClasses[i]}`);
    }
    cardPreviewEl.classList.add(`${selectedClass}`);
  };
  paletteIds[i].addEventListener('click', changeColor);
}
