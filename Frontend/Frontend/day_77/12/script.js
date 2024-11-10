/*
Example 1: Check Voting Eligibility


Condition:
Write a JavaScript function to prompt the user for their age and citizenship status, and display if they are eligible to vote.

Steps:

Write a function checkVotingEligibility to prompt for age and citizenship status.
Use logical operators to check if the user is at least 18 years old and a citizen.
Display the result using alert.
*/

function checkVotingEligibility(age, citizen) {
    if (age > 100 || age < 0) {
        return `error`
    }

    if (age >= 18 && citizen == true) {
        return `allowed`
    }
    else {
        return `denied`
    }
}

console.log(checkVotingEligibility(Number(prompt(`Enter age`)), Boolean(prompt(`Are you citizen (true or false)`))))