var mongoose = require("mongoose")

Schema = mongoose.Schema

const carschema = new mongoose.Schema(
    {
        car_name: {
            type: String,
            require: true
        },
        company_name: {
            type: String,
            require: true
        },
        model: {
            type: Number,
            require: true
        },
        color: {
            type: String,
            require: true
        },
        manufacture_year: {
            type: Number,
            require: true
        },

    }, { timestamps: true }
)

module.exports = mongoose.model("car", carschema)