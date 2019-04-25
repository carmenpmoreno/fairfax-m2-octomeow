/* eslint-disable strict */
//CAMPO JOB
const jobEl = document.getElementById('job');
const jobPreview = document.querySelector('.occupation');
const defaultJob = "Profesión";
jobPreview.innerHTML = defaultJob;

function getJobValue(){
  if (jobEl.value){
    jobPreview.innerHTML = jobEl.value;
  }else{
    jobPreview.innerHTML = defaultJob;
  }
}

jobEl.addEventListener('keyup', getJobValue);