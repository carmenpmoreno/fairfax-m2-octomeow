// COLLAPSIBLES

// Recoger la clase "legend" con QuerySelectoAll
const legends = document.querySelectorAll('.legend');
// Recogemos la clase homónima "collapsible"
const collapsibles = document.querySelectorAll('collapible');

// listener sobre el legend
for (const legend of legends) {
    legend.addEventListener('click', handlebuttonclick);
}

// hacer un handler para que al hacer click en el legend "x" nos muestre su clase collapsible, pero ocultando la de los demás legend
    function handlebuttonclick() {
        console.log('hola');
    // dentro de él, hacer un bucle que nos recorra el array de los legend y ¿tal vez el de los collapsibles?
    // for (let i=0; i<3; i++ ) {
    //     console.log('hola');
    // }
    // si se hace click en un legend
    // se muestra un collapsible
    }



