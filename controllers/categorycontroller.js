const express = require('express')

const router = express.Router()
const category = require("../models/category")

router.post('/create', async (req, res) => {
    const data = new category({
        category_name: req.body.category_name,
    })

    const savedData = await data.save()

    return res.json({
        message: "Record Created Successfully",
        data: savedData
    })
})

router.get('/list', async (req, res) => {

    const savedData = await category.find()

    return res.json({
        message: "Data Found",
        data: savedData
    })
})

router.get('/show/:id', async (req, res) => {

    const savedData = await category.findById(req.params.id)

    return res.json({
        message: "Data Found",
        data: savedData
    })
})


router.post('/update', async (req, res) => {
    const updateId = req.body.updateId
    const getCategory = await category.findById(updateId)
    if (!getCategory) {
        return res.status(400).json({
            status: false,
            message: "Category Not Found"
        })
    }

    let updateData = {
        category_name: req.body.category_name,
    }
    await category.findByIdAndUpdate(updateId, updateData)
    return res.status(200).json({
        status: true,
        message: "Record Updated Successfully",
    })
})

router.get('/remove/:id', async (req, res) => {

    const savedData = await category.findByIdAndDelete(req.params.id)

    return res.json({
        message: "Data Deleted",
    })
})

module.exports = router 