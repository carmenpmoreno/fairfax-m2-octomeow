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
    //Uso current target para saber qué paleta está seleccionada
    const selectedItem = (event.currentTarget);
    //busco en qué posición está colocado en el array
    const selectedItemIndex =paletteIds.indexOf(selectedItem);
    //añado la clase que esté en esa misma posición
    const selectedClass = paletteClasses[selectedItemIndex];
    cardPreviewEl.classList.remove('default--palette');
    //Elimino todas las posibles clases que pudiera haber seleccionado antes
    for(let i = 0; i<=2; i++){
      cardPreviewEl.classList.remove(`${paletteClasses[i]}`);
    }
    cardPreviewEl.classList.add(`${selectedClass}`);
  }

  paletteIds[i].addEventListener('click', changeColor);
}