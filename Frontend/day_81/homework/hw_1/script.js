let thumbnail1 = document.getElementById('thumbnail1')
let thumbnail2 = document.getElementById('thumbnail2')
let thumbnail3 = document.getElementById('thumbnail3')
let thumbnail4 = document.getElementById('thumbnail4')

let input = document.getElementById('productDiv')

thumbnail1.addEventListener('click', () => {
    input.src = 'images/product1.jpg'
})

thumbnail2.addEventListener('click', () => {
    input.src = 'images/product2.jpg'
})

thumbnail3.addEventListener('click', () => {
    input.src = 'images/product3.jpg'
})

thumbnail4.addEventListener('click', () => {
    input.src = 'images/product4.jpg'
})

// counter
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')

let amount = document.getElementById('amount')
let c = 0

minus.addEventListener('click', () => {
    if (c > 0) {
        c--
        amount.textContent = c
    }
    else {
        
    }
})

plus.addEventListener('click', () => {
    c++
    amount.textContent = c
})

// function of add to cart button
let cartButton = document.getElementById('buttonCart')

cartButton.addEventListener('click', () => {
    amount.textContent = 0
    alert(`Sucessfully added ${c} sneakers to the cart!`)
})