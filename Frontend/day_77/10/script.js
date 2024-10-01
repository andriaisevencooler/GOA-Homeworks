/*
Condition:
Write a JavaScript function to prompt the user for two heights and display if the first height is greater than, less than, or equal to the second height.

Steps:

Write a function compareHeights to prompt for two heights.
Use comparison operators to compare the heights.
Display the result using alert.
*/

let height1 = Number(prompt(`Enter Height1`))
let height2 = Number(prompt(`Enter Height2`))

if (height1 > height2) {
    alert(`height1 greater than height2`)
}
else if (height1 < height2) {
    alert(`height1 less than height2`)
}
else if (height1 === height2) {
    alert(`They equal`)
}