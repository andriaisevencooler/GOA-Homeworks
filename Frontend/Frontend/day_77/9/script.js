/*
Comparison Operators



Example 1: Compare Ages

Condition:
Write a JavaScript function to prompt the user for two ages and display if the first age is greater than, less than, or equal to the second age.

Steps:

Write a function compareAges to prompt for two ages.
Use comparison operators to compare the ages.
Display the result using alert.
*/

let age1 = Number(prompt(`Enter age1`))
let age2 = Number(prompt(`Enter age2`))

if (age1 > age2) {
    alert(`age1 is greater than age2`)
}
else if (age1 < age2) {
    alert(`age1 is less than age2`)
}
else if (age1 === age2) {
    alert(`They equal`)
}