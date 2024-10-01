/*
Condition:
Write a JavaScript function to prompt the user for a string and a number, concatenate them, and display the result with its data type.

Steps:

Write a function concatenateStringAndNumber to prompt for a string and a number.
Concatenate the string and number.
Display the result with its data type using alert.
*/

function concatenateStringAndNumber(str, num) {
    str2 = String(num)
    alert(`Output: ${str + str2}. Data Type: ${typeof str2}`)
}

console.log(concatenateStringAndNumber(prompt(`Enter str`), Number(prompt(`Enter num`))));