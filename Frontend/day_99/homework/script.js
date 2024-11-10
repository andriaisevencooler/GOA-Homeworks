/*
ინსტრუქცია: დაწერეთ JavaScript პროგრამა, რომელიც გამოიყენებს ქოლბექ ფუნქციას სტუდენტების შეფასების სისტემის გასამართავად.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
დაწერეთ ფუნქცია gradeStudent, რომელიც იღებს სტუდენტის ქულებს და ქოლბექ ფუნქციას, რომელიც დაადგენს შეფასებას based on ქულებზე. gradeStudent უნდა გამოიძახოს ქოლბექ ფუნქცია თითოეულ ქულაზე და გამოუცხადოს ახალი მასივი შეფასებებით.

დაწერეთ ქოლბექ ფუნქცია assignGrade, რომელიც მიიღებს ქულას და დააბრუნებს შესაბამის შეფასებას:

90 - 100: A
80 - 89: B
70 - 79: C
60 - 69: D
ქვედა 60: F
*/

let score = 90 // score

const gradeStudent = () => {
    if (score > 100 || score < 0) {
        console.log('Wrong score!')
    }

    if (score >= 90) {
        assignGrade('A')
    } else if (score >= 80) {
        assignGrade('B')
    } else if (score >= 70) {
        assignGrade('C')
    } else if (score >= 60) {
        assignGrade('D')
    } else if (score < 60) {
        assignGrade('F')
    }
}

const assignGrade = (message) => {
    if (message === 'A') {
        console.log("Perfect!")
    } else if (message === 'B') {
        console.log('Excellent!')
    } else if (message === 'C') {
        console.log('Good!')
    } else if (message === 'D') {
        console.log('Try Better Next time!')
    } else if (message === 'F') {
        console.log('Fail')
    }
}

console.log(gradeStudent())