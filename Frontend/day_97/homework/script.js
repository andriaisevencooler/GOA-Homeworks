/*
1) შექმენით ფუნქცია, რომელიც მიიღებს რამდენიმე რიცხვს და დააბრუნებს ამ რიცხვების მაქსიმალურ მნიშვნელობას. გამოიყენეთ spread ოპერატორი.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

/*
2) გაქვთ რიცხვების სია. დაწერეთ ფუნქცია, რომელიც ამოირჩევს იმ რიცხვებს, რომლებიც დიდია 10-ზე. გამოიყენეთ filter მეთოდი.
*/

let nums = [1, 4, 12, 17, 124, 9, 3, 7, 22, 2].filter(item => item > 10)


console.log(nums);
