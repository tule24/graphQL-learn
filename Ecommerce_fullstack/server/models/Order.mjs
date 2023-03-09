import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity: Number
        }
    ],
    total: {
        type: Number,
        require: true
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status: {
        type: String,
        default: "Not process",
        enum: ["Not process", "Processing", "Shipped", "Delivered", "Cancelled"]
    }
}, { timestamps: true })

export default model('orders', orderSchema)