/*
Object Literal & Object Destructuring
Example 1: Display Book Information

Condition:
Write a JavaScript function to create an object representing a book and display its properties using object destructuring.

Steps:

Create an object literal book with properties: title, author, year.
Write a function displayBookInfo to destructure the book object and display its properties.
Use alert to display the book information.
*/

function displayBookInfo(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

    this.getSummary = function() {
        alert(`${this.title} by ${this.author} ivented in ${this.year}`)
    }
}

let BookInfo = new book('Karlsson on the roof', 'Astrid Lindgren', 1992)

alert(BookInfo.getSummary())