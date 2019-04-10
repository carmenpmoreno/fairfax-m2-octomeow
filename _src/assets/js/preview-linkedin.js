//LINKEDIN

const linkedinPreview= document.querySelector('.link__linkedin');
const linkedinInput= document.getElementById('linkedin');
const linkedinDefaultText='https://www.linkedin.com';

function writeLinkedin(){
    console.log('works');
    linkedinPreview.href= 'https://www.'+linkedinInput.value || linkedinDefaultText;
};

linkedinInput.addEventListener('change', writeLinkedin);