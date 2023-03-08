import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        require: [true, "Please provie name"]
    },
    description: {
        type: String,
        require: [true, "Please provie description"]
    },
    price: {
        type: Number,
        require: [true, "Please provie price"]
    },
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    photo: String,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        require: [true, "Please provide category id"]
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        immutable: true,
        ref: 'users',
        require: [true, "Please provie vendor id"]
    }
})

export default model('products', productSchema)