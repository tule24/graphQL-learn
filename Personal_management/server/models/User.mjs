import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

export default model('users', userSchema)