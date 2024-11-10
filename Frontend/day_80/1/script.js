/*
    random number from 1-100
*/

let number = document.getElementById('number')
let button = document.getElementById('btn')




button.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * 101)
    number.textContent = randomNum
})