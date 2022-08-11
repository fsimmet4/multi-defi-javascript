const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyR':
            body.style.backgroundColor = 'red';
            break;
        case 'KeyG':
            body.style.backgroundColor = 'green';
            break;
        case 'KeyB':
            body.style.backgroundColor = 'blue';
            break;
        case 'KeyP':
            body.style.backgroundColor = 'pink';
            break;
        case 'KeyY':
            body.style.backgroundColor = 'yellow';
            break;
        default:
            body.style.backgroundColor = 'white';
        break;
    }
})