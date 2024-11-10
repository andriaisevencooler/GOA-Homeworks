/*
Example 3: Compare Scores


Condition:
Write a JavaScript function to prompt the user for two test scores and display if the first score is greater than, less than, or equal to the second score.

Steps:

Write a function compareScores to prompt for two scores.
Use comparison operators to compare the scores.
Display the result using alert.
*/

let score1 = Number(prompt(`Enter score1`))
let score2 = Number(prompt(`Enter score2`))

if (score1 > score2) {
    alert(`score1 greater than score2`)
}
else if (score1 < score2) {
    alert(`score1 less than score2`)
}
else if (score1 === score2) {
    alert(`they equal`)
}