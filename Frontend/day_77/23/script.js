/*
Example 2: Create and Display Student Information


Condition:
Write a JavaScript function to create an object representing a student and display its properties using object destructuring.

Steps:

Create an object literal student with properties: name, age, grade.
Write a function displayStudentInfo to destructure the student object and display its properties.
Use alert to display the student information.
*/

function displayStudentInfo(name, age, grade) {
    this.name = name
    this.age = age
    this.grade = grade
    this.getSummary = function() {
        alert(`Hello im ${this.name}, i am ${this.age} years old. I'm on ${this.grade}th grade`)
    }
}

let student = new studentInfo('George', 14, 9)

alert(student.getSummary())