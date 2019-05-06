const inputEl = document.querySelector(".fill-in__input");
const inputDefaultText = "Nombre de prueba";
const nameCardEl = document.querySelector(".full-name");

const writeCard = () => {
  const inputText = inputEl.value || inputDefaultText;
  nameCardEl.innerHTML = inputText;
};
inputEl.addEventListener("keyup", writeCard);