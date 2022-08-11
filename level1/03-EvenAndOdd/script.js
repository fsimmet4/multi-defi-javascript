const square = document.querySelector('div');
let i = 0;

square.addEventListener('click', () => {
    i++;
    if (i%10 === 0) {
        square.style.backgroundColor = 'pink';
    }
    else if (i%2 === 0) {
        square.style.backgroundColor = 'green';
    }
    else {
        square.style.backgroundColor = 'yellow';
    }  
})