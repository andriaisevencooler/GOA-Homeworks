/*
Example 3: Check Age Group


Condition:
Write a JavaScript function to prompt the user for their age and display their age group (child, teenager, adult, or senior).

Steps:

Write a function checkAgeGroup to prompt for an age.
Use conditional statements to classify the age group:
0-12: Child
13-19: Teenager
20-64: Adult
65 and above: Senior
Display the age group using alert.
*/

function checkAgeGroup(age) {
    if (age > 100 || age < 0) {
        alert('error')
    }

    if (age <= 12) {
        alert('Child')
    }
    else if (age <= 19) {
        alert('Teenager')
    }
    else if (age <= 64) {
        alert('Adult')
    }
    else {
        alert('Senior')
    }
}

alert(checkAgeGroup(Number(prompt('Enter Age'))))