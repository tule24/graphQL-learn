import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: [true, "Please provie name"]
    },
    description: {
        type: String,
        require: [true, "Please provie description"]
    }
})

export default model('categories', categorySchema)