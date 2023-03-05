const { Schema, model } = require('mongoose')

const authorSchema = new Schema({
    name: String,
    age: Number
})

module.exports = model('authors', authorSchema)