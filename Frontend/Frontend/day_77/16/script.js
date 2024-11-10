/*
Example 2: Convert String to Number


Condition:
Write a JavaScript function to prompt the user for a string representation of a number, convert it to a number, and display both the original and converted values with their data types.

Steps:

Write a function convertStringToNumber to prompt for a string representation of a number.
Convert the string to a number using parseFloat.
Display both the original and converted values with their data types using alert.
*/

function convertStringToNumber(string) {
    let integer = Number(string)
    alert(`Original: ${string}`)
    alert(`Int: ${integer}`)
}

console.log(convertStringToNumber(prompt(`Enter string`)))