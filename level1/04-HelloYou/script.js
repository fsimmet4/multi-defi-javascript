const form = document.querySelector('form');

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');

const res = document.querySelector('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    res.firstChild.nodeValue = `Bonjour ${lastName.value} ${firstName.value}`;
})