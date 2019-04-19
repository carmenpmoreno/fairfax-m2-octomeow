/* eslint-disable strict */

const legends = document.querySelectorAll('.legend');
const collapsibles = document.querySelectorAll('.collapsibles');

for (const legend of legends) {
  legend.addEventListener('click', handlebuttonclick);
}

function handlebuttonclick(event) {
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



