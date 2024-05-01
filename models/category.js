var mongoose = require('mongoose')

Schema = mongoose.Schema


const studentSchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            require: true
        },


    },
    { timestamps: true }
)


module.exports = mongoose.model("category", studentSchema)