console.log('Hola');


let card = {
    name: 'Nombre y apellido',
    job: 'Trabajo',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
    palette: '1',
};

const inputUpdateEls = document.querySelectorAll('.input-update');
console.log(inputUpdateEls);

function cardUpdate(name, value) {
    card[name] = value;
}

function inputChangeHandler(event) {
    const currentInput = event.currentTarget;
    const name = currentInput.name;
    const value = currentInput.value;
    cardUpdate(name, value);
}

for (let i = 0; i < inputUpdateEls.length; i++) {
    inputUpdateEls[i].addEventListener('change', inputChangeHandler);
}
