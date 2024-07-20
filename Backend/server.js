const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const WorkoutsRoutes = require('./routes/workoutsRoutes')
const mongoose = require('mongoose')
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/hello',WorkoutsRoutes)

mongoose.connect(process.env.MONGO_CONN_STR)
.then(() => {
    app.listen(process.env.PORT,() => {
        console.log('Connected and Listening to requests made on',process.env.PORT)
       })
})
.catch((error) => {
    console.log({error:error.message})
})
