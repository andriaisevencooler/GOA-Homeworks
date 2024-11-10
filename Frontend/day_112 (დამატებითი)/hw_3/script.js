const {readFile, writeFile, mkdir} = require('fs')

mkdir('level101', (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})

for (let i = 0; i < 10; i++) {
    mkdir(`level101/classwork ${i}`, (err) => {
        if (err) {
            throw `Error: ${err}`
        }
    })

    mkdir(`level101/homework ${i}`, (err) => {
        if (err) {
            throw `Error: ${err}`
        }
    })

    writeFile(`level101/homework ${i}/file.txt`, 'This file was created by JS scripts', (err) => {
        if (err) {
            throw `Error: ${err}`
        }
    })

    writeFile(`level101/classwork ${i}/file.txt`, 'This file was created by JS scripts', (err) => {
        if (err) {
            throw `Error: ${err}`
        }
    })
}