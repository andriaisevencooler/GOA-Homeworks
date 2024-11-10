/*
    Example 3: Show/Hide Element
    Condition:
    Write a JavaScript function to show or hide an HTML element with a given ID.

    Steps:

    Create an HTML file with a div element and an ID.
    Write a JavaScript function toggleVisibility that accepts an ID.
    Use document.getElementById to select the element by ID.
    Toggle the visibility of the selected element using the display style property.
*/

let text = document.getElementById('t1')

text.style.opacity = '0%'
// or
// text.style.visibility = 'hidden'
// or
// text.style.display = 'none'