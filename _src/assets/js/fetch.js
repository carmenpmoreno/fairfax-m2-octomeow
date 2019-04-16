/* eslint-disable strict */
function sendRequest(json){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function showURL(result){
  if(result.success){
    twitterLinkEl.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    twitterLinkEl.innerHTML = 'ERROR:' + result.error;
  }
}

function formButtonClickHandler() {
  sendRequest(JSON.parse(cacheCard));
}

formButton.addEventListener('click', formButtonClickHandler);