/* eslint-disable no-console */
/* eslint-disable strict */

let card = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

const inputUpdateEls = document.querySelectorAll('.input-update');

let localStorageKey = 'cacheCard';

let cacheCard = () => {
  if (localStorage.cacheCard) {
    const savedCard = JSON.parse(localStorage.getItem('cacheCard'));
    inputUpdateEls.forEach(function(element) {
      // console.log(element.name);
      // console.log(element.getAttribute('type'));
      const currentType = element.getAttribute('type');
      if(currentType === 'radio' && element.value === savedCard[element.name]) {
        element.checked = true;
        // element.click();
        // element.nextElementSibling.change();
      } else {
        element.value = savedCard[element.name];
      }  
    });
  }
};

cacheCard();

const twitterLinkEl = document.querySelector('.twitter-link');

function cardUpdate(name, value) {
  card[name] = value;
}

function finalFormHandler() {
  localStorage.setItem(localStorageKey, JSON.stringify(card));
}

function inputChangeHandler(event) {
  const currentInput = event.currentTarget;
  const name = currentInput.name;
  const value = currentInput.value;
  cardUpdate(name, value);
  finalFormHandler();
}

for (let i = 0; i < inputUpdateEls.length; i++) {
  inputUpdateEls[i].addEventListener('change', inputChangeHandler);
}
// function sendRequest(json){
//   fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
//     method: 'POST',
//     body: JSON.stringify(json),
//     headers: {
//       'content-type': 'application/json'
//     },
//   })
//     .then(function(resp) {
//       return resp.json();
//     })
//     .then(function(result) {
//       showURL(result);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }

// function showURL(result){
//   if(result.success){
//     twitterLinkEl.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
//   } else {
//     twitterLinkEl.innerHTML = 'ERROR:' + result.error;
//   }
// }

// function formButtonClickHandler() {
//   sendRequest(JSON.parse(cacheCard));
// }

// formButton.addEventListener('click', formButtonClickHandler);