// COLLAPSIBLES

'use strict';

const legends= document.querySelectorAll('.legend');
//const buttonEl= document.querySelector('.hidden');

for(const legend of legends) {
  legend.addEventListener('click', handlerButtonClick);

}

// en la funcion dices que, al hermano del legend, si contiene la clase collapsible, se la quitas, y le añades la que contiene sus estilos, por ejemplo en el share seria share__container

//IMPORTANTE
//para no modificar las clases vamos a crear el div anterior en el que colocaremos la clase comun y la clase hidden

function  handlerButtonClick (event){
  console.log('hola');
  
  //se le pone la clase comun, y le dices que, al hermano de legend le quites la clase collapsuble
  event.currentTarget.nextElementSibling.classList.toggle('collapsible');
}