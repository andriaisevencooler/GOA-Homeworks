/* 
Example 2: Convert Temperature


Condition:
Write a JavaScript function to prompt the user for a temperature in Celsius and convert it to Fahrenheit.

Steps:

Write a function convertTemperature to prompt for Celsius temperature.
Convert the temperature to Fahrenheit using the formula: F = (C * 9/5) + 32.
Display the converted temperature using alert.

*/

function convertTemperature(C) {
    F = (C * 9 / 5) + 32
    alert(`Farenheight: ${F}`)
}

convertTemperature(Number(prompt(`Enter Celcius`)))