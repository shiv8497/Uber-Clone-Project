const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser')
const captainRoutes = require('./routes/captain.routes.js')
connectToDB()


app.use(cors()) // isse isliye use kare because tum sirf ek specific domain se he request accept kanra 
app.use(express.json()) // isse tumhe body mein data milega jo tum request bhejoge
app.use(express.urlencoded({ extended: true })) // isse tumhe url encoded data milega
app.use(cookieParser()) // isse tumhe cookies milegi jo tum request bhejoge
app.get('/' , (req , res) => {
    res.send("Hello dosto")
})

app.use('/user', userRoutes) // isse tumhe user routes milega jo tumne create kiya hai
app.use('/captain', captainRoutes) // isse tumhe captain routes milega jo tumne create kiya hai 



module.exports = app

