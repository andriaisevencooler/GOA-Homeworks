let display = document.getElementById('display')
function appendToDisplay(input) {
    display.textContent += input
}

function clearDisplay() {
    display.textContent = ""
}

function calculate() {
    display.textContent = eval(display.textContent)
}

// theme addEventListener

const theme1 = document.getElementById('theme-1')
const theme2 = document.getElementById('theme-2')
const theme3 = document.getElementById('theme-3')

let elements = {
    body: document.getElementById('background'),
    num1: document.getElementById('one'),
    num2: document.getElementById('two'),
    num3: document.getElementById('three'),
    toggleDiv: document.getElementById('toggleDiv'),
    inputStyle: document.getElementsByClassName('inputStyle'),
    themeText: document.getElementById('themeText'),
    title: document.getElementById('title'),
    displayBox: document.getElementsByTagName('article'),
    mainContainer: document.getElementsByTagName('main'),
    gridKeys: document.getElementsByClassName('grid-keys'),
    delete: document.getElementById('child4'),
    reset: document.getElementById('child17'),
    equal: document.getElementById('child18')
}

// theme 1

theme1.addEventListener('click', () => {
    // effect
    theme1.style.opacity = '100%'
    theme2.style.opacity = '0%'
    theme3.style.opacity = '0%'
    // transition
    theme1.style.transition = 'opacity .5s ease .2s'
})

// theme 2

theme2.addEventListener('click', () => {
    // effect
    theme1.style.opacity = '0%'
    theme2.style.opacity = '100%'
    theme3.style.opacity = '0%'
    // transition
    theme2.style.transition = 'opacity .5s ease .2s'
})

// theme 3

theme3.addEventListener('click', () => {
    // effect
    theme1.style.opacity = '0%'
    theme2.style.opacity = '0%'
    theme3.style.opacity = '100%'
    // transition
    theme3.style.transition = 'opacity .5s ease .2s'
})