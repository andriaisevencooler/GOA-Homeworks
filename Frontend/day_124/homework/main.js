import express from 'express'
import dotenv from 'dotenv'
import connectDB from './connect/connect.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!') //testing localhost
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    connectDB();
})