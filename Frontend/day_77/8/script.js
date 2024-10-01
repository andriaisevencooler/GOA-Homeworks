/* 
Example 3: Calculate Circle Circumference


Condition:
Write a JavaScript function to prompt the user for the radius of a circle and display the circumference.

Steps:

Write a function calculateCircumference to prompt for the radius.
Calculate the circumference using the formula: C = 2 * π * r.
Display the circumference using alert.
*/

function calculateCircumference(r) {
    C = 2 * Math.PI * r
    alert(C)
}

console.log(calculateCircumference(Number(prompt(`Enter Radius`))))