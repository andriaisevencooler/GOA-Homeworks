/*
Example 3: Check Driving Eligibility


Condition:
Write a JavaScript function to prompt the user for their age and whether they have a driving license, and display if they are eligible to drive.

Steps:

Write a function checkDrivingEligibility to prompt for age and license status.
Use logical operators to check if the user is at least 18 years old and has a license.
Display the result using alert.
*/

function checkDrivingEligibility(age, license) {
    if (age > 100 || age < 0) {
        return `error`
    }

    if (license == true && age >= 18) {
        return `allowed`
    }
    else {
        return `denied`
    }
}

console.log(checkDrivingEligibility(Number(prompt(`Enter age`)), Boolean(prompt(`License? (true or false)`))))