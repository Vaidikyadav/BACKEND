const express = require('express')

const router = express.Router()
const users = require("../models/users")

router.post('/create', async (req, res) => {
    const data = new users({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email.toLowerCase(),
    })

    const savedData = await data.save()

    return res.json({
        message: "User Created Successfully",
        data: savedData
    })
})

router.post('/login', async (req, res) => {

    const email = req.body.email.toLowerCase()
    const password = req.body.password
    const findUser = await users.findOne({ email: email, is_admin: 1 })

    if (!findUser) {
        return res.status(400).json({
            status: false,
            message: "Email not registered"
        })
    }

    console.log(password)
    console.log(findUser.password)
    if (password !== findUser.password) {
        return res.status(400).json({
            status: false,
            message: "Invalid Password"
        })
    }

    return res.json({
        status:true,
        message: "Login Successfully",
        data: findUser
    })
})

module.exports = router 