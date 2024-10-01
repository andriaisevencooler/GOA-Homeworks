/*
    JS Functions
    Example 1: Calculate Average of an Array
    Condition:
    Write a function calculateAverage that takes an array of numbers as an argument and returns the average of those numbers.

    Steps:

    Create a function named calculateAverage that accepts an array of numbers.
    Use a loop to sum up all the numbers in the array.
    Divide the sum by the length of the array to find the average.
    Return the average.
*/

function calculateAverage(array) {
    let c = 0
    for (let i = 0; i < array.length; i++) {
        c += array[i]
    }

    let average = c / array.length
    return average
}

console.log(calculateAverage(Number(prompt(`Enter Array of numbers`))))