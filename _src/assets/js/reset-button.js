"use strict";
const resetButon = document.querySelector(".reset--button");
const inputResetEl = document.querySelectorAll(".fill-in__input");
const liPreviewEl = document.querySelectorAll(".contact__list--rrss");
const cardPreviewElClases = ["palette--1", "palette--2", "palette--3"];
const backToDefault = "";

function loopColors() {
  for (let k = 0; k < cardPreviewElClases.length; k++) {
    if (cardPreviewEl.classList.contains(cardPreviewElClases[k])) {
      cardPreviewEl.classList.remove(cardPreviewElClases[k]);
      cardPreviewEl.classList.add("default--palette");
    }
  }
}
function loopPreview() {
  for (let j = 0; j < liPreviewEl.length; j++) {
    nameCardEl.innerHTML = inputDefaultText;
    jobPreview.innerHTML = defaultJob;
    liPreviewEl[j].children[0].href = backToDefault;
    iconMobEl.title = backToDefault;
  }
}
for (let i = 0; i < inputResetEl.length; i++) {
  resetButon.addEventListener("click", function () {
    inputResetEl[i].value = backToDefault;
    //preview
    loopPreview();
    //colors
    loopColors();
  });
}