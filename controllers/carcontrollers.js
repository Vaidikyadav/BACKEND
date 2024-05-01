const express = require("express")

const router = express.Router()
const car = require("../models/car");


router.post('/create', async (req, res) => {
    const data = new car({
        car_name: req.body.car_name,
        company_name: req.body.company_name,
        model: req.body.model,
        color: req.body.color,
        manufacture_year: req.body.manufacture_year,
    })

    const savedData = await data.save()

    return res.json({
        message: "Record Created Successfully",
        data: savedData
    })
})

router.get('/list', async (req, res) => {

    const savedData = await car.find()

    return res.json({
        message: "Data Found",
        data: savedData
    })
})

router.get('/show/:id', async (req, res) => {

    const savedData = await car.findById(req.params.id)

    return res.json({
        message: "Data Found",
        data: savedData
    })
})


router.post('/update', async (req, res) => {
    const updateId = req.body.updateId
    const getCar = await car.findById(updateId)
    if (!getCar) {
        return res.status(400).json({
            status: false,
            message: "Car Not Found"
        })
    }

    let updateData = {
        car_name: req.body.car_name,
        company_name: req.body.company_name,
        model: req.body.model,
        color: req.body.color,
        manufacture_year: req.body.manufacture_year,
    }
    await car.findByIdAndUpdate(updateId, updateData)
    return res.status(200).json({
        status: true,
        message: "Record Updated Successfully",
    })
})

router.get('/remove/:id', async (req, res) => {

    const savedData = await car.findByIdAndDelete(req.params.id)

    return res.json({
        message: "Data Deleted",
    })
})

module.exports = router 