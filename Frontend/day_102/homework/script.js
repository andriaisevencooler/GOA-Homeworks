/*
1)ფუნქცია, რომელიც დააგენერირებს რიცხვების უსასრულოდ
დავალება: შექმენი გენერატორი, რომელიც დააგენერირებს უწყვეტ რიცხვებს 0 დან უსადრულობამდე.
*/

// function* generator() {
//     let i = 0
//     while (i < Infinity) {
//         yield i++
//     }
// }

// let gen = generator()

// while (0 == 0) {
//     console.log(gen.next())
// }

/*
2)ფუნქცია, რომელიც დააგენერირებს ლუწ რიცხვებს
დავალება: შექმენი გენერატორი, რომელიც დააგენერირებს მხოლოდ ლუწ რიცხვებს.
*/

let i = 0

function* generator2() {
    while (i <= 20) {
        i++
        if (i % 2 == 0) {
            yield i
        }
    }
}

let gen2 = generator2()

console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)