/* eslint-disable no-undef */
/* eslint-disable strict */
const form = document.querySelector('form');
const twitterLinkEl = document.querySelector('.title-twitter-content');

const getJSONFromInputs = inputs => {
  return inputs.reduce((acc, val) => {
    if(val.nodeName !== 'BUTTON') {
      acc[val.name] = val.value;
    }
    return acc;
  }, {});
};

const showURL = result => {
  if(result.success){
    const linkTwitter = document.createElement('a');
    linkTwitter.classList.add('twitter-link-result');
    linkTwitter.href = result.cardURL;

    const linkText = document.createTextNode(result.cardURL);
    linkTwitter.appendChild(linkText);

    twitterLinkEl.appendChild(linkTwitter);
    callTwitter(result.cardURL);
  }else{
    const textError = document.createTextNode(`ERROR: ${result.error}`);
    twitterLinkEl.appendChild(textError);
  }
};

const sendRequest = obj => {
  const json = JSON.stringify(obj);
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: json,
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(resp => resp.json())
    .then(result => showURL(result))
    .catch(error => console.log(error));
};

const sendData = () => {
  const inputs = Array.from(form.elements);
  const json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  json.photo = fr.result;
  sendRequest(json);
};

const loadPhoto = () => {
  const myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
};

formButton.addEventListener('click', loadPhoto);