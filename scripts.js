const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const textArray = ["Hello, I'm Ariel Ladner"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        cursor.classList.add('fade-out');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 500);
});