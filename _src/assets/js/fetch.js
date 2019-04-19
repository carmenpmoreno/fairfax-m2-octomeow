/* eslint-disable no-undef */
/* eslint-disable strict */
var form = document.querySelector('form');



function sendData () {
  console.log('Estoy en send data');
  var inputs = Array.from(form.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto(){
  var myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs){
  return inputs.reduce(function (acc, val) {
    if(val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
    return acc;
  }, {});
}

function sendRequest(obj){
  const json = JSON.stringify(obj);
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: json,
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });
}

function showURL(result){
  if(result.success){
    twitterLinkEl.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  }else{
    twitterLinkEl.innerHTML = 'ERROR:' + result.error;
  }
}

formButton.addEventListener('click', loadPhoto);
