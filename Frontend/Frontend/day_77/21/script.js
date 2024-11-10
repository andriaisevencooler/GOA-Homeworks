/*
Example 1: Calculate Factorial


Condition:
Write a JavaScript function to prompt the user for a number and calculate its factorial using a for loop.

Steps:

Write a function calculateFactorial to prompt for a number.
Use a for loop to calculate the factorial.
Display the factorial using alert.
*/

let number = Number(prompt('Enter positive number: '))

if (number < 0) {
    alert('error! number not positive')
}

else if (number === 1) {
    alert(`Factorial of ${number} is: 1`)
}

else {
    let fact = 1
    for (let i = 0; i <= number; i++) {
        fact *= i
    }

    console.log('Factorial of ' + number + ' is: ' + fact)
}