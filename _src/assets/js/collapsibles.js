/* eslint-disable strict */
const legends = document.querySelectorAll('.legend');
const collapsibles = document.querySelectorAll('.collapsibles');

const handlebuttonclick = event => {
  const myItem = event.currentTarget;
  const siblingClass = myItem.nextElementSibling.classList;
  const itemClass = myItem.classList;

  if (myItem.classList.contains('closed')) {
    for (let i = 0; i < legends.length; i++) {
      collapsibles[i].classList.add('hidden');
      legends[i].classList.add('closed');
    }
    siblingClass.remove('hidden');
    itemClass.remove('closed');
  } else {
    siblingClass.add('hidden');
    itemClass.add('closed');
  }
};

for (const legend of legends) {
  legend.addEventListener('click', handlebuttonclick);
}