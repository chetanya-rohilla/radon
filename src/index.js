const express = require('express')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const route = require('./routes/route.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use('/', route)

mongoose.connect("mongodb+srv://chetanya-rohilla:chetanya@cluster0.jsshkkh.mongodb.net/Chetanya-DB")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err))

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running in port "+ (process.env.PORT || 3000));
})
