const express = require("express")
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()
const app = express()
const categorycontroller = require("./controllers/categorycontroller")
app.use(cors())
//process.env.variable_name

const port = process.env.PORT || 9000
const connection = mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on('open', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Database Connected')
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/backend/api/category", categorycontroller)
app.use("/backend/api/product", require("./controllers/productcontroller"))
app.use("/backend/api/student", require("./controllers/studentcontrollers"))
app.use("/backend/api/car", require("./controllers/carcontrollers"))
app.use("/backend/api/admin/auth", require("./controllers/adminauthcontroller"))
app.use("/backend/api/login/auth", require("./controllers/logincontrollers"))

app.listen(port, () => {
    console.log(`app is listening ${port}`)
})
