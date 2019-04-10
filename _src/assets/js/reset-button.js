const resetButon = document.querySelector('.reset--button');
const defaultcolor = document.querySelector('.default--palette');
const inputResetEl = document.querySelectorAll('.fill-in__input');

// resetButon.onclick = function () {
//     inputMain.value = '';
//     parrafMain.innerHTML = defaultText;
//     counter.innerHTML = 0;
// }
function resetFormColors() {
    inputResetEl[i].value = '';

    console.log('click');
}

resetButon.addEventListener('click', resetFormColors);