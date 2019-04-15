"use strict";
const resetButon = document.querySelector(".reset--button");
const defaultcolor = document.querySelector(".default--palette");
const inputResetEl = document.querySelectorAll(".fill-in__input");
const liPreviewEl = document.querySelectorAll(".contact__list--rrss");


for (let i = 0; i < inputResetEl.length; i++) {
  const everyResetInput = inputResetEl[i];
  resetButon.addEventListener("click", function resetFormColors() {
    inputResetEl[i].value = "";
  });
}

for (let i = 0; i < liPreviewEl.length; i++) {
    const everyResetInput = inputResetEl[i];
    //liPreviewEl.src = everyliPreviewEl;
    console.log('Href ', liPreviewEl[i].children);

    console.dir(liPreviewEl[i].children);
  }




/*

//------------------
//prueba change color
//Resumen: cambiar color del preview cuando se selecciones los radiobutton

//Recoger todos los radiobutton
const inputsRadio = document.querySelectorAll('.radio');

//Recoger el preview
const preview = document.getElementById('preview');

//Crear la funcion y el listener del radiobutton
//Se recorre cada input con el bucle
for (let i = 0; i < inputsRadio.length; i++) {

    //asignamos a la constante el valor de cada value
    const everyInput = inputsRadio[i];

    everyInput.addEventListener('click', function () {

        //asignamos a la constante el valor de cada radio button
        const radioValue = everyInput.value;

        //Añadir o quitar las clases en el preview según el radiobutton.
        // Por defecto verde

        //Si el value = a rojo, añadir clase roja y quitar las otras
        if (radioValue === 'red') {
            preview.classList.add('preview-red');
            preview.classList.remove('preview-blue', 'preview-green');

            //Si el value = a azul, añadir clase roja y quitar las otras
        } else if (radioValue === 'blue') {
            preview.classList.add('preview-blue');
            preview.classList.remove('preview-green', 'preview-red');

            //añadir clase green y quitar las otras
        } else {
            preview.classList.add('preview-green');
            preview.classList.remove('preview-blue', 'preview-red');
        }

    });
}
*/
