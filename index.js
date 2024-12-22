require ('dotenv').config


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send("This is twitter Page")
})

app.get('/login', (req, res) => {
    res.send("this is login Page")
})

// app.listen
app.listen(process.env.PORT, () => {
    console.log(`App Listening on port ${port} and ${process.env.PORT}`)
})