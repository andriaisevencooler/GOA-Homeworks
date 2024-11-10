/*
Example 2: Check Even or Odd


Condition:
Write a JavaScript function to prompt the user for a number and display if it is even or odd.

Steps:

Write a function checkEvenOrOdd to prompt for a number.
Use a conditional statement to check if the number is even or odd.
Display the result using alert.
*/

function checkEvenOrOdd(num) {
    if (num % 2 == 0) {
        alert('Even')
    }
    else {
        alert('Odd')
    }
}

alert(checkEvenOrOdd(Number(prompt('Enter Num'))))