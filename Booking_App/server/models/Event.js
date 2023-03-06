const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    title: {
        type: String,
        require: [true, "Please provide title"]
    },
    description: {
        type: String,
        require: [true, "Please provide description"]
    },
    price: {
        type: Number,
        require: [true, "Please provide price"]
    },
    date: {
        type: Date,
        require: [true, "Please provide date"]
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('events', eventSchema)