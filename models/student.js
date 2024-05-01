var mongoose = require('mongoose')

Schema = mongoose.Schema

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        phone: {
            type: Number,
            require: true
        },
        course: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            require: true
        }
    }, { timestamps: true }
)

const student = mongoose.model("student", studentSchema)

module.exports = student 