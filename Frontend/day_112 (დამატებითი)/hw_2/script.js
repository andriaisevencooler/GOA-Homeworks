const {readFile, writeFile, mkdir, write} = require('fs')

mkdir('level101', (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})

mkdir('level101/classwork' , (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})

mkdir('level101/homework' , (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})

writeFile('level101/homework/file.txt', 'This file was created by JS scripts', (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})

writeFile('level101/classwork/file.txt', 'This file was created by JS scripts', (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})