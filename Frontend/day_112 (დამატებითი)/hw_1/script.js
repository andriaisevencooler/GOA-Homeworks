const {readFile, writeFile} = require('fs')

const text = 'This file was created by JS scripts (GOA BEST)'

writeFile("./file.txt", text, (err) => {
    if (err) {
        throw `Error: ${err}`
    }
})