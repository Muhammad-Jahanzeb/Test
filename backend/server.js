const express = require('express')
const { mongoose } = require('mongoose')
const router = require('./routes/routes')
const config = require('./config/config')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/',router)

port = process.env.PORT 

app.listen(port, ()=>{
    config(),
    console.log(`Server running at: http://localhost:${port}`)
})
