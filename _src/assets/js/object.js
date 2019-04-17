/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable strict */

let card = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: ""
};

<<<<<<< HEAD
const inputUpdateEls = document.querySelectorAll('.input-update');
let localStorageKey = 'cacheCard';

let cacheCard = () => {
  if (localStorage.cacheCard) {
    const savedCard = JSON.parse(localStorage.getItem('cacheCard'));
    console.log(savedCard);

    inputUpdateEls.forEach(function(element) {

      const currentType = element.getAttribute('type');

      if(currentType === 'radio' && element.value === savedCard[element.name]) {
        element.checked = true;
      } else if (currentType === 'file') {
        console.log(element.nextElementSibling.style.backgroundImage);
        element.nextElementSibling.style.backgroundImage = `url(${savedCard[element.name]}`;
      } else {
        element.value = savedCard[element.name];
      }
    });
  }
};
=======
// let localStorageKey = 'cacheCard';

// let cacheCard = () => {
//   if (localStorage.cacheCard) {
//     const savedCard = JSON.parse(localStorage.getItem('cacheCard'));
//     inputUpdateEls.forEach(function(element) {
//       // console.log(element.name);
//       // console.log(element.getAttribute('type'));
//       const currentType = element.getAttribute('type');
//       if(currentType === 'radio' && element.value === savedCard[element.name]) {
//         element.checked = true;
//         // element.click();
//         // element.nextElementSibling.change();
//       } else {
//         element.value = savedCard[element.name];
//       }
//     });
//   }
// };
>>>>>>> 56fe3b6608296789e1cd209ee6cc88aaab445498

// cacheCard();
// function finalFormHandler() {
//   localStorage.setItem(JSON.stringify(card));
// }

<<<<<<< HEAD

const twitterLinkEl = document.querySelector('.twitter-link');
=======
const inputUpdateEls = document.querySelectorAll(".input-update");
>>>>>>> 56fe3b6608296789e1cd209ee6cc88aaab445498

const twitterLinkEl = document.querySelector(".twitter-link");
function cardUpdate(name, value) {
  card[name] = value;
}

function sendData() {
  var inputs = Array.from(inputUpdateEls);
  card.photo = fr.result;
  //sendRequest(json);
}
function loadPhoto() {
  let myFile = document.querySelector("#img-selector").files[0];
  fr.addEventListener("load", sendData);
  fr.readAsDataURL(myFile);
}

function inputChangeHandler(event) {
  console.log('Emit event', event);
  const currentInput = event.currentTarget;
  const name = currentInput.name;
  const value = currentInput.value;
  cardUpdate(name, value);
  //finalFormHandler();
}

for (let i = 0; i < inputUpdateEls.length; i++) {
  inputUpdateEls[i].addEventListener("change", inputChangeHandler);
}
function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(function(resp) {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('Algo ha ido mal');
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}
