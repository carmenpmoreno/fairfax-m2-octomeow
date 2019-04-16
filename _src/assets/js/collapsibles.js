// COLLAPSIBLES

// Recoger la clase "legend" con QuerySelectoAll
const legends = document.querySelectorAll('.legend');
console.log(legends);
// Recogemos la clase homónima "collapsible"
const collapsibles = document.querySelectorAll('.collapsibles');
console.log(collapsibles);
// listener sobre el legend
for (const legend of legends) {
    legend.addEventListener('click', handlebuttonclick);
}

// hacer un handler para que al hacer click en el legend "x" nos muestre su clase collapsible, pero ocultando la de los demás legend
function handlebuttonclick(event) {
    console.log('hola');
    // si está cerrado, se abre y quito el indicador de cerrado en el legend
    // TO DO: en clase closed, poner la flecha en el otro sentido.
    if (event.currentTarget.classList.contains('closed')) {
        for (let i=0; i<legends.length; i++) {
            collapsibles[i].classList.add('hidden');
            legends[i].classList.add('closed');
        }
        event.currentTarget.nextElementSibling.classList.remove('hidden');
        event.currentTarget.classList.remove('closed');
    }
    else {
        event.currentTarget.nextElementSibling.classList.add('hidden');
        event.currentTarget.classList.add('closed');
    }

}



