const express = require('express')

const router = express.Router()
const news = require("../models/news")

router.post('/create', async (req, res) => {
    try{

        const findUser = await news.findOne({email:req.body.email.toLowerCase()})
        if(findUser){
            return res.status(400).json({
                status:false,
                message:"Email already exits."
            })
        }
        const data = new news({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email.toLowerCase(),
        })

        const savedData = await data.save()

    return res.json({
        message: "User Created Successfully",
        data: savedData
    })

    }
    catch(err){
        return res.status(500).json({
            status:false,
            error:err,
            message:err.message
        })
    }

    
})

router.post('/log', async (req, res) => {
    const name = req.body.name
    const email = req.body.email.toLowerCase()
    const password = req.body.password
    console.log(req.body)
    const findUser = await news.findOne({ email: email })
console.log(findUser)
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