const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        let html = fs.readFileSync('index.html', 'utf-8')
        res.end(html)
    }
})

const local = 1000
server.listen(local)
console.log(`Server is running on http://localhost:${local}`)