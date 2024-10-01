// variables

let currentDate = new Date()

let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()
let currentDay = currentDate.getDate()

let inputYear = document.querySelector("#year")
let inputMonth = document.querySelector("#month")
let inputDay = document.querySelector("#day")

let submit = document.querySelector("#submit")

let outputYears = document.querySelector("#yearsOutput")
let outputMonths = document.querySelector("#monthsOutput")
let outputDays = document.querySelector("#daysOutput")



//actual code

outputYears.textContent = "--"
outputMonths.textContent = "--"
outputDays.textContent = "--"

submit.addEventListener("click", () => {



    let yearValue = inputYear.value
    let monthValue = inputMonth.value
    let dayValue = inputDay.value

    
    let yearCalc = currentYear - yearValue
    let monthCalc = currentMonth - monthValue
    let dayCalc = currentDay - dayValue

    let monthCalc2 = ""
    let dayCalc2 = ""

    if (monthValue > currentMonth) {
        monthCalc2 = monthValue - currentMonth
    }

    if (yearValue > currentYear || monthValue > 11 || dayValue > 31) {
        alert("ERROR! try again with different Date!")
    }
    else if (yearValue <= 0 || monthValue < 0 || dayValue <= 0) {
        alert("ERROR! try again with different Date!")
    }
    else {
        outputYears.textContent = yearCalc
        if (monthCalc2 != "") {
            outputMonths.textContent = monthCalc2 + currentMonth
        } else {
            outputMonths.textContent = monthCalc
        }
        if (dayCalc2 != "") {
            outputDays.textContent = dayCalc2
        } else {
            outputDays.textContent = dayCalc
        }
        
    }





    if (outputMonths.textContent == monthCalc) {
        outputMonths.textContent = Math.abs(outputMonths)
        if (isNaN(outputMonths)) {
            outputMonths.textContent = monthCalc
        } else {
            outputMonths.textContent = Math.abs(outputMonths)
        }
    }
    if (outputDays.textContent == monthCalc) {
        outputDays.textContent = Math.abs(outputDays)
        if (isNaN(outputDays)) {
            outputDays.textContent = dayCalc
        } else {
            outputDays.textContent = Math.abs(outputDays)
        }
    }

})