/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */

/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">
<i class="fab fa-twitter twitter-icon"></i>
Compartir en Twitter
</a> */



// si queremos que se añada un texto despues de ? escribimos text= para una url &url=

function callTwitter (){
    const twitterText = `Esta es mi nueva tarjeta de contacto. Si quieres una de nuestras Awesome Profile Cards, visita: http://beta.adalab.es/fairfax-m2-octomeow/`;
    //const cardTwitterLink=;
    const linkTextTrans = encodeURIComponent(twitterText);
    const linkCard = finalUrl;
    const linkCardTransform = encodeURIComponent(linkCard);
    const twitterLink ='https://twitter.com/intent/tweet?';
    const twitterFull= `${twitterLink}`+`text=`+`${linkTextTrans}`+ `&url=`+`${linkCardTransform}`;
    console.log(twitterFull);
    const shareLink = document.querySelector('.twitter-link');
    shareLink.href= twitterFull;
}

console.log(shareLink);


// const twitterSendButton = document.querySelector('.twitter-link');

// function twitterButtonHandler(event) {
//   event.preventDefault;
//   const finalUrlEl = document.querySelector('.twitter-link-result');
 
//   const finalUrl = finalUrlEl.innerHTML;
//   console.log(finalUrl);
//   const twitterText = `Esta es mi nueva tarjeta de contacto: ${linkUrlTransform} Si quieres una de nuestras Awesome Profile Cards, visita: http://beta.adalab.es/fairfax-m2-octomeow/`;
//   //const cardTwitterLink=;
//   const linkTextTrans = encodeURIComponent(twitterText);
//   const linkUrlTransform = ncodeURIComponent(finalUrl);
//   const twitterLink ='https://twitter.com/intent/tweet?';

//   const twitterFull= `${twitterLink}`+`text=`+`${linkTextTrans}`//+`&url=` + `${linkUrlTransform}`

//   console.log(twitterFull);

//   const shareLink = document.querySelector('.twitter-link');
//   shareLink.href= twitterFull;
// }