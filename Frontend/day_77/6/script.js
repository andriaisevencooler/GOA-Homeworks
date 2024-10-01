/*
    Prompt



    Example 1: Calculate Rectangle Area
    Condition:
    Write a JavaScript function to prompt the user for the width and height of a rectangle and display the area.

    Steps:

    Write a function calculateRectangleArea to prompt for width and height.
    Calculate the area of the rectangle.
    Display the area using alert.
*/

function area(width, height) {
    alert(`Area: ${width * height}`)
}

console.log(area(Number(prompt(`Enter Width of rectangle`)), Number(prompt(`Enter Height of rectangle`))))