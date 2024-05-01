const express = require('express')

const router = express.Router()
const product = require("../models/product")

router.post('/create', async (req, res) => {
    const data = new product({
        product_name: req.body.product_name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    })

    const savedData = await data.save()

    return res.json({
        message: "Product Created Successfully",
        data: savedData
    })
})

router.get('/list', async (req, res) => {

    const savedData = await product.find().sort({
        // createdAt:-1,
        price: -1
    })

    return res.json({
        message: "Data Found",
        data: savedData
    })
})

router.get('/show/:id', async (req, res) => {

    const savedData = await product.findById(req.params.id).populate('category', { category_name: 1 })

    return res.json({
        message: "Data Found",
        data: savedData
    })
})

router.post('/update', async (req, res) => {
    const updateId = req.body.updateId
    const getProduct = await product.findById(updateId)
    if (!getProduct) {
        return res.status(400).json({
            status: false,
            message: "Product Not Found"
        })
    }

    let updateData = {
        product_name: req.body.product_name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category

    }
    await product.findByIdAndUpdate(updateId, updateData)
    return res.status(200).json({
        status: true,
        message: "Record Updated Successfully",
    })
})

router.get('/remove/:id', async (req, res) => {

    const savedData = await product.findByIdAndDelete(req.params.id)

    return res.json({
        message: "Data Deleted",
    })
})

module.exports = router 