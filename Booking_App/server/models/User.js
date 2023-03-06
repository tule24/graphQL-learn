const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: [true, "Please provide email"]
    },
    password: {
        type: String,
        require: [true, "Please prove password"]
    }
})

module.exports = model('users', userSchema)