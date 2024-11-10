/*
Task 2: მასივების ოპერაციები:
1. შექმენი მასივი numbers მნიშვნელობებით [1, 2, 3, 4, 5, 6].
2. დაამატე რიცხვი 7 მასივის ბოლოს.
3. წაშალე პირველი ელემენტი მასივიდან.
4. იპოვე რიცხვი 4-ის ინდექსი მასივში.
5. შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ ლუწ რიცხვებს ორიგინალური მასივიდან.
*/

// 1:
let numbers = [1, 2, 3, 4, 5, 6]

numbers.push(7)
numbers.push(8)
numbers.push(9)
numbers.push(10)
numbers.push(11)
numbers.push(12)
numbers.push(13)

numbers.splice(0, 1)

let four = numbers.find(item => item == 4)

let evenNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers)
console.log(four)

for (let i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] % 2 === 0) {
        console.log(evenNumbers[i])
    }
}