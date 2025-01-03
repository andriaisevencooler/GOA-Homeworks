const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    })
})

app.listen(3000, () => {
    console.log('Server is running on - http://localhost:3000');
})