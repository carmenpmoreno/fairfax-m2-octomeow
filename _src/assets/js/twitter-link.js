/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */

/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">
<i class="fab fa-twitter twitter-icon"></i>
Compartir en Twitter
</a> */



// si queremos que se añada un texto despues de ? escribimos text= para una url &url=
const twitterText='hola que tal';
//const cardTwitterLink=;
const linkTextTrans= encodeURIComponent(twitterText);
const twitterLink ='https://twitter.com/intent/tweet?';

const twitterFull= `${twitterLink}`+`text=`+`${linkTextTrans}`;//+ `&url=${linkUrlTransform}`;

console.log(twitterFull);

const shareLink = document.querySelector('.twitter-link');
shareLink.href= twitterFull;

console.log(shareLink);
