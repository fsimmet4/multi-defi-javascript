const form = document.querySelector('form');

const sentence = document.querySelector('#sentence');
const res = document.querySelector('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let tmp = "";
    for (let i = 0; i < sentence.value.length; i++) {

        if ((sentence.value.charCodeAt(i) > 64) && (sentence.value.charCodeAt(i) < 91)) {
            tmp += String.fromCharCode(sentence.value.charCodeAt(i) + 32);
        }
        else if ((sentence.value.charCodeAt(i) > 96) && (sentence.value.charCodeAt(i) < 123)) {
            tmp += String.fromCharCode(sentence.value.charCodeAt(i) - 32);
        }
        else {
            tmp += sentence.value[i];
        } 
    }
    res.firstChild.nodeValue = tmp;
})

// 65 90 maj

// 97 122 min 

// 32