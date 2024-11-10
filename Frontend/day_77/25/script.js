/*
Arrays (Not Array ES6 Methods)


Example 1: Find Maximum Value


Condition:
Write a JavaScript function to find the maximum value in an array of numbers.

Steps:

Write a function findMaxValue to accept an array of numbers.
Use a loop to find the maximum value.
Return and display the maximum value using alert.
*/

function findMaxValue(array) {
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

    alert('Max value is ' + max)
}

findMaxValue([1, 4, 6, 7])