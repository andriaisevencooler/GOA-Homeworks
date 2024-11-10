/*
Level 88:
1)Create a Function to Display Current Date and Time
*/

let displayCurrentDate = () => {
    const now = new Date()
    const year = String(now.getFullYear())
    const month = String(now.getMonth() + 1)
    const day = String(now.getDate())
    const hour = String(now.getHours())
    const minute = String(now.getMinutes())
    const seconds = String(now.getSeconds())

    return `Date: ${year}/${month}/${day} Time: ${hour}/${minute}/${seconds}`
}

document.write(displayCurrentDate())
