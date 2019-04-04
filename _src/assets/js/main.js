'use strict';

// Añado clase "".email" al enlace de email en _contact.html
const previewLink = document.querySelector('.email');
const emailInput = document.getElementById('email');

// handler
function insertEmailOnPreview () {
    previewLink.href = `mailto:${emailInput.value}`;
};

// listener
emailInput.addEventListener('keyup', insertEmailOnPreview);

