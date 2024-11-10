/*
Example 3: Display Employee Information


Condition:
Write a JavaScript function to create an object representing an employee and display its properties using object destructuring.

Steps:

Create an object literal employee with properties: name, position, salary.
Write a function displayEmployeeInfo to destructure the employee object and display its properties.
Use alert to display the employee information.
*/

function displayEmployeeInfo(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
    this.getSummary = function() {
        alert(`Hello my name is ${this.name} and im ${this.position}. i have ${this.salary}$ salary`)
    }
}

let employee = new employeeInfo('Jacob', 'Manager', 1000)
alert(employee.getSummary())