require("dotenv").config();

const express = require('express')

const app = express()

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(require('../src/routes/routes'))

app.listen(process.env.PORT, () => {
    console.log("listening to port ->", process.env.PORT);
})