const btn = document.querySelector('button');
const select = document.querySelector('select');

const res = document.querySelector('p');

const data = {
    'espagne': 'Holà',
    'france': 'Bonjour',
    'angleterre': 'Hello',
    'italie': 'Buongiorno',
    'allemagne': 'Hallo'
}

btn.addEventListener('click', () => {
    res.firstChild.nodeValue = data[select.value];
})