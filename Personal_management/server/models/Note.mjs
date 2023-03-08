import { Schema, model } from 'mongoose'

const noteSchema = new Schema({
    content: String,
    folderId: {
        type: Schema.Types.ObjectId,
        ref: 'folders',
        required: true
    }
}, { timestamps: true })

export default model('notes', noteSchema)