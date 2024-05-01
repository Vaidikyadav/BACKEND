var mongoose = require('mongoose')

Schema = mongoose.Schema

const studentSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            require: false
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            ref: "category",
            require: false,
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("product", studentSchema)