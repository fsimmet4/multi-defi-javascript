const form = document.querySelector('form');
const dec = document.querySelector('#dec');
const res = document.querySelector('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    res.firstChild.nodeValue = decToBinary(dec.value);
})

function decToBinary(num){
    if(num >= 1){
      return decToBinary(Math.floor(num/2))+(num % 2);
    }
    return '';
  }