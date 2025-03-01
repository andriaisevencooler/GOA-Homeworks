const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error reading index.html')
        } else {
            res.send(data)
        }
    })
})

app.listen(port, () => {
    console.log(`Server is chilling on http://localhost:${port}`)
})