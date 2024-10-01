/*
Example 1: Grade Classification


Condition:
Write a JavaScript function to prompt the user for a test score and display the grade (A, B, C, D, or F) based on the score.

Steps:

Write a function classifyGrade to prompt for a test score.
Use conditional statements to classify the grade:
90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F
Display the grade using alert.
*/

function classifyGrade(score) {
    if (score > 100 || score < 0) {
        alert('error')
    }


    if (score > 90) {
        alert('A')
    }
    else if (score > 80) {
        alert('B')
    }
    else if (score > 70) {
        alert('C')
    }
    else if (score > 60) {
        alert('D')
    }
    else {
        alert('F')
    }
}

alert(classifyGrade(Number(prompt('Enter score'))))