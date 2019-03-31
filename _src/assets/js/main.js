'use strict';

console.log('>> Ready :)');

//Collapsible

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
      arrow.classList.add('fa-chevron-up');
    }
  });
}
