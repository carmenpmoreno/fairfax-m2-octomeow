
'use strict';


console.log('>> Ready :)');


// NOMBRE

const inputEl = document.querySelector('.fill-in__input');
const inputDefaultText = "Nombre de prueba";
const nameCardEl = document.querySelector('.full-name');


function writeCard () {
    console.log('Listener is working');
    const inputText = inputEl.value || inputDefaultText;
    nameCardEl.innerHTML =  inputText;
};

inputEl.addEventListener('keyup', writeCard);

//Color select

const cardPreviewEl = document.querySelector('.card-preview');
const palettePickerEl = document.querySelector('.option__container');


const paletteIds =[];
const paletteClasses = [];

for (let i=1; i<=3; i++){
    paletteIds.push(palettePickerEl.querySelector(`#p${i}`));
    paletteClasses.push(palettePickerEl.querySelector(`.palette--${i}`).className); 
};
console.log(paletteIds);
console.log(paletteClasses);

for (let i=0; i<=2; i++){

    function changeColor(event){
        //Uso current target para saber qué paleta está seleccionada
        const selectedItem = (event.currentTarget);
        //busco en qué posición está colocado en el array 
        const selectedItemIndex =paletteIds.indexOf(selectedItem);
        //añado la clase que esté en esa misma posición 
        const selectedClass = paletteClasses[selectedItemIndex];
        console.log(selectedClass);
        cardPreviewEl.classList.remove('default--palette');
        //Elimino todas las posibles clases que pudiera haber seleccionado antes
        for(let i = 0; i<=2; i++){
            cardPreviewEl.classList.remove(`${paletteClasses[i]}`);
        };
        cardPreviewEl.classList.add(`${selectedClass}`);
    };

paletteIds[i].addEventListener('click', changeColor);
}
