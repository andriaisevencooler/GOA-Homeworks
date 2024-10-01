/*
Example 2: Check Admission Eligibility


Condition:
Write a JavaScript function to prompt the user for their test scores in Math and English, and display if they are eligible for admission (both scores must be at least 60).

Steps:

Write a function checkAdmissionEligibility to prompt for Math and English scores.
Use logical operators to check if both scores are at least 60.
Display the result using alert.
*/

function checkAdmissionEligibility(mathScore, englishScore) {
    if (mathScore && englishScore >= 60) {
        return `allowed`
    }
    else {
        return `denied`
    }
}

console.log(checkAdmissionEligibility(Number(prompt(`Enter math score`)), Number(prompt(`Enter english score`))))