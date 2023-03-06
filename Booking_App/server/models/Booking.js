const { Schema, model } = require('mongoose')

const bookingSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'events'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, { timestamps: true })

module.exports = model('bookings', bookingSchema)