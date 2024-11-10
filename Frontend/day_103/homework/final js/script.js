/*
1) შევქმანთ arr და მასზე მოვახდინოთ სხვადასხვა მეთები, გამოვიყენოთ, map, filter, find, join, indexOf იგივე მაგალთები რაც იყო გაკვეთილზე
*/

let mapArr = [1, 2, 3, 4, 5].map((num) => num * 10)
let filterArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((item) => item % 2 == 0)
let findArr = [0, 1, 2, 3, 4, 5].find((item) => item > 3)
let joinArr = ["Andria", "Gaduashvili"].join(" ")
let indexOfArr = ["Apple", "Banana", "Pineapple", "Cocoa", "Orange"].indexOf("Cocoa")


console.log(mapArr)
console.log(filterArr)
console.log(findArr)
console.log(joinArr)
console.log(indexOfArr)