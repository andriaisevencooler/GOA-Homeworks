/*
    random background project
*/

let button = document.getElementById('button')
let backgroundHex = document.getElementById('backgroundHex')
let background = document.getElementById('background')

let hexSymbol = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', () => {
    let hex = '#'
    for(let i = 0; i < 6; i++) {
        hex += hexSymbol[Math.trunc(Math.random() * hexSymbol.length)]
    }
    background.style.background = hex
    backgroundHex.textContent = hex
})