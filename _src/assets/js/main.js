'use strict';

console.log('>> Ready :)');

//Collapsible

const collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {

  collapsibles[i].addEventListener("click", function() {
    const content = this.nextElementSibling;
    const arrow = this.getElementsByClassName('legend__arrow')[0];

    if (content.style.display === "flex") {
      content.style.display = "none";
      arrow.classList.remove('fa-chevron-up');
    } else {
      content.style.display = "flex";
      arrow.classList.add('fa-chevron-up');
    }
  });   
}

