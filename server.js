require("./config/config");

var express = require('express')

var app = express()

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('../src/routes/routes'))

app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto ", process.env.PORT);
})