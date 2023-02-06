const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

	name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    rollNo: {
        type: Number,
        required: true
    },

    address: {
        line1: {
            type: String
        },
        line2: {
            type: String
        }
    }
	


})

module.exports = mongoose.model('Students', studentSchema)