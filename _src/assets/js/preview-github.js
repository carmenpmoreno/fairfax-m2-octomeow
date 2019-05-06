//GitHub
const inputLink = document.getElementById('github');
const addLink = document.getElementById('linkGithub');
const defaultLink = 'https://github.com/';

const addMyLink = () => {addLink.href = defaultLink + inputLink.value;};

inputLink.addEventListener('keyup', addMyLink);