/* eslint-disable strict */
//LINKEDIN

const linkedinPreview = document.querySelector('.link__linkedin');
const linkedinInput = document.getElementById('linkedin');
const linkedinDefaultText ='https://www.linkedin.com';

const writeLinkedin = () => {
  linkedinPreview.href = 'https://www.linkedin.com/in/' + linkedinInput.value || linkedinDefaultText;
};

linkedinInput.addEventListener('change', writeLinkedin);