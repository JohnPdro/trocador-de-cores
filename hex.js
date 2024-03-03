const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){ // Looping que realiza a coleta de 6 caracteres para criar um número hexadecimal
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}