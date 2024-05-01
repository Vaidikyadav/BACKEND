const express = require('express')

const router = express.Router()
const student = require("../models/student")

router.post('/create', async (req, res) => {
    const data = new student({
        name: req.body.name,
        phone: req.body.phone,
        dob: req.body.dob,
        course: req.body.course,
    })

    const savedData = await data.save()

    return res.json({
        message: "Record Created Successfully",
        data: savedData
    })
})

router.get('/list', async (req, res) => {

    const savedData = await student.find()

    return res.json({
        message: "Data Found",
        data: savedData
    })
})

router.get('/show/:id', async (req, res) => {

    const savedData = await student.findById(req.params.id)

    return res.json({
        message: "Data Found",
        data: savedData
    })
})


router.post('/update', async (req, res) => {
    const updateId = req.body.updateId
    const getStudent = await student.findById(updateId)
    if (!getStudent) {
        return res.status(400).json({
            status: false,
            message: "Student Not Found"
        })
    }

    let updateData = {
        name: req.body.name,
        phone: req.body.phone,
        dob: req.body.dob,
        course: req.body.course,
    }
    await student.findByIdAndUpdate(updateId, updateData)
    return res.status(200).json({
        status: true,
        message: "Record Updated Successfully",
    })
})

router.get('/remove/:id', async (req, res) => {

    const savedData = await student.findByIdAndDelete(req.params.id)

    return res.json({
        message: "Data Deleted",
    })
})

module.exports = router 