// COLLAPSIBLES

// Recoger la clase "legend" con QuerySelectoAll
const legends = document.querySelectorAll('.legend');
// Recogemos la clase homónima "collapsible"
const collapsibles = document.querySelectorAll('collapsibles');

// listener sobre el legend
for (const legend of legends) {
    legend.addEventListener('click', handlebuttonclick);
}

// hacer un handler para que al hacer click en el legend "x" nos muestre su clase collapsible, pero ocultando la de los demás legend
    function handlebuttonclick(event) {
        console.log('hola');
        // bucle para que estén todos los collapsibles cerrados
        for (const collapsible of collapsibles) {
            collapsible.classList.add('hidden');
        }
        

        // si está cerrado, se abre y si está abierto, se cierra
        if (event.currentTarget.classList.contains('closed')) {
            event.currentTarget.nextElementSibling.classList.remove('hidden');
            event.currentTarget.classList.remove('closed');
            event.currentTarget.classList.add('open-arrow');
        }
        else {
            event.currentTarget.nextElementSibling.classList.add('hidden');
            event.currentTarget.classList.add('closed');
        }
        
    }



