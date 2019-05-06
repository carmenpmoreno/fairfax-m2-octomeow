/* eslint-disable strict */

function callTwitter (finalUrl){
  const twitterText = `Esta es mi nueva tarjeta de contacto:`;
  const linkTextTrans = encodeURIComponent(twitterText);
  const linkCardTransform = encodeURIComponent(finalUrl);
  const twitterLink ='https://twitter.com/intent/tweet?';
  const twitterFull= `${twitterLink}`+`text=`+`${linkTextTrans}`+ `&url=`+`${linkCardTransform}`;
  const shareLink = document.querySelector('.twitter-link');
  shareLink.href= twitterFull;
}