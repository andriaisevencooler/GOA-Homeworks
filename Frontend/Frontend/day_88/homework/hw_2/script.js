/*
2) შექმენით ფუნქცია, რომელიც იღებს თარიღის ორ სტრიქონს (YYYY-MM-DD ფორმატში) შეყვანის სახით, გარდაქმნის მათ თარიღის ობიექტებად და აბრუნებს დღეების რაოდენობას ორ თარიღს შორის.
დაამატეთ დღეები თარიღს
*/

const main = () => {
    const date1 = new Date("2020-01-01")
    const date2 = new Date("2023-04-20")

    if (date1 > date2) {
        return "date 1 is bigger than date 2"
    }
    else {
        return "date 2 is bigger than date 1"
    }
}

console.log(main())