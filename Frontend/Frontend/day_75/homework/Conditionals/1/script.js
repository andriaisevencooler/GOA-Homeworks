/*

ჩაწერეთ JavaScript ფუნქცია, რათა შეამოწმოთ სტუდენტმა ჩააბარა თუ ჩააბარა კურსი მათი გამოცდის ქულების მიხედვით. სთხოვეთ მომხმარებელს შეიყვანოს ქულები შუალედური გამოცდისთვის, დასკვნითი გამოცდისთვის და პროექტისთვის. დარწმუნდით, რომ მომხმარებელმა შეიყვანოს სწორი ქულები (პოზიტიური რიცხვები 0-დან 100-მდე) თითოეული კომპონენტისთვის. გამოიყენეთ შემდეგი შეფასების კრიტერიუმები: თუ საშუალო ქულა (შეწონილი 20% შუალედური კურსისთვის, 40% საბოლოო და 40% პროექტისთვის) არის 70 ან მეტი, სტუდენტი გაივლის კურსს. თუ საშუალო ქულა 70-ზე დაბალია, სტუდენტი ვერ ახერხებს კურსს. აჩვენეთ მომხმარებლისთვის შეტყობინება, რომელშიც მითითებულია მისი გავლის/ჩავარდნის სტატუსი და გამოთვლილი საშუალო ქულა.

*/

function course(points) {
    if (points >= 70) {
        return `Course Passed`
    }
    else if (points < 70) {
        return `Course Failed`
    }
    else if (points > 100 || points < 0) {
        return `Error`
    }
}

console.log(course(Number(prompt(`Enter Exam Score`))))