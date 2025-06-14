const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) // isse isliye use kare because tum sirf ek specific domain se he request accept kanra 


app.get('/' , (req , res) => {
    res.send("Hello dosto")
})


module.exports = app
