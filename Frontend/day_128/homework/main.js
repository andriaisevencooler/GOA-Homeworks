import express from 'express'
import dotenv from 'dotenv'
import connectDB from './connect/connect.js'
import users from './model/userModel.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
    const allUsers = await users.find()
    res.send(allUsers)
})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})