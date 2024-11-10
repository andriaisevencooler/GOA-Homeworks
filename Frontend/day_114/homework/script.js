const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end('This is about page')
    }
    if (req.url === '/homepage') {
        res.end('<a href="github.com" target="_blank">Github</a>')
    }
})


let host = 5000
server.listen(host)
console.log(`Server is running on http://localhost:${host}`)