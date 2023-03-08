import { Schema, model } from 'mongoose'

const folderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, { timestamps: true })

export default model('folders', folderSchema)