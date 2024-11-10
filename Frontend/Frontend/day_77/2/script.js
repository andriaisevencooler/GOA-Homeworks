/*
    Example 3: Reverse a String
    Condition:
    Write a function reverseString that takes a string as an argument and returns the string reversed.

    Steps:

    Create a function named reverseString that accepts a string.
    Use a loop to iterate through the string in reverse order.
    Construct a new string by appending characters in reverse order.
    Return the reversed string.
*/

function reverseString(str) {
    let StringReversed = "" // hello
    for (let i = str.length - 1; i >= 0; i--) {
        StringReversed += str[i]
    }
    alert(StringReversed)
}

console.log(reverseString(prompt(`Enter text (String)`)))