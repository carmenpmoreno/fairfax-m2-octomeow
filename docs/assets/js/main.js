"use strict";let vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`);const legends=document.querySelectorAll(".legend"),collapsibles=document.querySelectorAll(".collapsibles");for(const e of legends)e.addEventListener("click",handlebuttonclick);function handlebuttonclick(e){if(e.currentTarget.classList.contains("closed")){for(let e=0;e<legends.length;e++)collapsibles[e].classList.add("hidden"),legends[e].classList.add("closed");e.currentTarget.nextElementSibling.classList.remove("hidden"),e.currentTarget.classList.remove("closed")}else e.currentTarget.nextElementSibling.classList.add("hidden"),e.currentTarget.classList.add("closed")}const cardPreviewEl=document.querySelector(".card-preview"),palettePickerEl=document.querySelector(".option__container"),paletteIds=[],paletteClasses=[];for(let e=1;e<=3;e++)paletteIds.push(palettePickerEl.querySelector(`#p${e}`)),paletteClasses.push(palettePickerEl.querySelector(`.palette--${e}`).className);for(let e=0;e<=2;e++){function changeColor(e){const t=e.currentTarget,n=paletteIds.indexOf(t),l=paletteClasses[n];cardPreviewEl.classList.remove("default--palette");for(let e=0;e<=2;e++)cardPreviewEl.classList.remove(`${paletteClasses[e]}`);cardPreviewEl.classList.add(`${l}`)}paletteIds[e].addEventListener("click",changeColor)}const inputLink=document.getElementById("github"),addLink=document.getElementById("linkGithub"),defaultLink="https://github.com/";function addMyLink(){addLink.href=defaultLink+inputLink.value}inputLink.addEventListener("keyup",addMyLink);const jobEl=document.getElementById("job"),jobPreview=document.querySelector(".occupation"),defaultJob="Profesión";function getJobValue(){jobEl.value?jobPreview.innerHTML=jobEl.value:jobPreview.innerHTML=defaultJob}jobPreview.innerHTML=defaultJob,jobEl.addEventListener("keyup",getJobValue);const linkedinPreview=document.querySelector(".link__linkedin"),linkedinInput=document.getElementById("linkedin"),linkedinDefaultText="https://www.linkedin.com";function writeLinkedin(){linkedinPreview.href="https://www.linkedin.com/in/"+linkedinInput.value||linkedinDefaultText}linkedinInput.addEventListener("change",writeLinkedin);const inputEl=document.querySelector(".fill-in__input"),inputDefaultText="Nombre de prueba",nameCardEl=document.querySelector(".full-name");function writeCard(){const e=inputEl.value||inputDefaultText;nameCardEl.innerHTML=e}inputEl.addEventListener("keyup",writeCard);const inputTelEl=document.querySelector(".input__tel"),iconMobEl=document.querySelector(".icon__link--mobile");function insertHref(){const e=inputTelEl.value;iconMobEl.href=`tel:${e}`,iconMobEl.title=`${e}`}inputTelEl.addEventListener("change",insertHref);const formButton=document.querySelector(".share-button"),previewIco=document.querySelector(".contact__list--rrss"),emptyInput=document.querySelector(".fill-in__input"),twitterEl=document.querySelector(".section__twitter");function handlerSubmitButton(e){e.preventDefault(),formButton.classList.add("share-button-pushed"),twitterEl.classList.remove("collapsible__hidden")}formButton.addEventListener("click",handlerSubmitButton);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);let card={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};const inputUpdateEls=document.querySelectorAll(".input-update");let localStorageKey="cacheCard";function changeColorCache(e){const t=paletteClasses[e-1];cardPreviewEl.classList.remove("default--palette");for(let e=0;e<=2;e++)cardPreviewEl.classList.remove(`${paletteClasses[e]}`);cardPreviewEl.classList.add(`${t}`)}function changeTextCache(){addMyLink(),getJobValue(),writeLinkedin(),writeCard(),insertHref()}function changeImgCache(){card.photo=profileImage.style.backgroundImage||"url('assets/images/default-profile-pic.png')"}let cacheCard=()=>{if(localStorage.cacheCard){const e=JSON.parse(localStorage.getItem("cacheCard"));inputUpdateEls.forEach(function(t){const n=t.getAttribute("type");"radio"===n&&t.value===e[t.name]?(t.checked=!0,changeColorCache(t.value)):"file"===n?(profileImage.style.backgroundImage=e.photo,profilePreview.style.backgroundImage=e.photo):(t.value=e[t.name],changeTextCache())})}};function cardUpdate(e,t,n){"file"===e.currentTarget.getAttribute("type")?setTimeout(changeImgCache,2e3):card[t]=n}function finalFormHandler(){localStorage.setItem(localStorageKey,JSON.stringify(card))}function inputChangeHandler(e){const t=e.currentTarget;cardUpdate(e,t.name,t.value),finalFormHandler()}cacheCard();for(let e=0;e<inputUpdateEls.length;e++)inputUpdateEls[e].addEventListener("change",inputChangeHandler);var form=document.querySelector("form");const twitterLinkEl=document.querySelector(".title-twitter-content");function sendData(){var e=getJSONFromInputs(Array.from(form.elements));e.skills=["JavaScript","React"],e.photo=fr.result,sendRequest(e)}function loadPhoto(){var e=document.querySelector("#img-selector").files[0];fr.addEventListener("load",sendData),fr.readAsDataURL(e)}function getJSONFromInputs(e){return e.reduce(function(e,t){return"BUTTON"!==t.nodeName&&(e[t.name]=t.value),e},{})}function sendRequest(e){const t=JSON.stringify(e);fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:t,headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){showURL(e)}).catch(function(e){console.log(e)})}function showURL(e){e.success?(twitterLinkEl.innerHTML='<a class="twitter-link-result" href='+e.cardURL+">"+e.cardURL+"</a>",callTwitter(e.cardURL)):twitterLinkEl.innerHTML="ERROR:"+e.error}formButton.addEventListener("click",loadPhoto);const resetButon=document.querySelector(".reset--button"),inputResetEl=document.querySelectorAll(".fill-in__input"),liPreviewEl=document.querySelectorAll(".contact__list--rrss"),cardPreviewElClases=["palette--1","palette--2","palette--3"],backToDefault="";function loopColors(){for(let e=0;e<cardPreviewElClases.length;e++)cardPreviewEl.classList.contains(cardPreviewElClases[e])&&(cardPreviewEl.classList.remove(cardPreviewElClases[e]),cardPreviewEl.classList.add("palette--1"))}function loopPreview(){for(let e=0;e<liPreviewEl.length;e++)nameCardEl.innerHTML=inputDefaultText,jobPreview.innerHTML=defaultJob,liPreviewEl[e].children[0].href=backToDefault,iconMobEl.title=backToDefault,profilePreview.style.backgroundImage="none"}for(let e=0;e<inputResetEl.length;e++)resetButon.addEventListener("click",function(){inputResetEl[e].value=backToDefault,profileImage.style.backgroundImage="url(assets/images/default-profile-pic.png)",loopPreview(),loopColors()});function callTwitter(e){const t="https://twitter.com/intent/tweet?text="+`${encodeURIComponent("Esta es mi nueva tarjeta de contacto:")}`+"&url="+`${encodeURIComponent(e)}`;document.querySelector(".twitter-link").href=t}