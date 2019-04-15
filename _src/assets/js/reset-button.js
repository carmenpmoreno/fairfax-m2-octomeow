"use strict";
const resetButon = document.querySelector(".reset--button");
const inputResetEl = document.querySelectorAll(".fill-in__input");
const liPreviewEl = document.querySelectorAll(".contact__list--rrss");
const cardPreviewElClases = ["palette--1", "palette--2", "palette--3"];
const backToDefault = "";

for (let i = 0; i < inputResetEl.length; i++) {
  for (let j = 0; j < liPreviewEl.length; j++) {
    for (let k = 0; k < cardPreviewElClases.length; k++) {
      resetButon.addEventListener("click", function resetFormColors() {
        inputResetEl[i].value = backToDefault;
        //preview
        nameCardEl.innerHTML = inputDefaultText;
        jobPreview.innerHTML = defaultJob;
        liPreviewEl[j].children[0].href = backToDefault;
        iconMobEl.title = backToDefault;
        //colors
        if (cardPreviewEl.classList.contains(cardPreviewElClases[k])) {
          cardPreviewEl.classList.remove(cardPreviewElClases[k]);
          cardPreviewEl.classList.add("default--palette");
        }
      });
    }
  }
}
