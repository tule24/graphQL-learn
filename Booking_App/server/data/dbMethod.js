const Event = require('../models/Event')
const User = require('../models/User')
const Booking = require('../models/Booking')
const bcryptjs = require('bcryptjs')
const mongoDataMethods = {
    createEvent: async eventInput => {
        try {
            const event = {
                title: eventInput.title,
                description: eventInput.description,
                price: Number(eventInput.price),
                date: new Date(eventInput.date),
                creator: eventInput.creatorId
            }
            const newEvent = await Event.create(event)
            return newEvent
        } catch (error) {
            console.log(error)
        }
    },
    getAllEvent: async (condition) => condition !== null ? await Event.find(condition) : await Event.find(),
    getEventById: async eventId => await Event.findById(eventId),
    getAllUser: async () => await User.find(),
    getUserById: async userId => await User.findById(userId),
    createUser: async userInput => {
        try {
            const user = await User.findOne({ email: userInput.email })
            if (user) {
                throw new Error("Email already exist")
            } else {
                const hashPassword = await bcryptjs.hash(userInput.password, 12)
                let newUser = {
                    email: userInput.email,
                    password: hashPassword
                }
                newUser = await User.create(newUser)
                return newUser
            }
        } catch (err) {
            throw err
        }
    },
    getAllBooking: async (condition) => condition !== null ? await Booking.find(condition) : await Booking.find(),
    getBookingById: async bookingId => await Booking.findById(bookingId),
    createBooking: async eventId => {
        try {
            const event = await Event.findById(eventId)
            if (!event) {
                throw new Error("Event not exist")
            } else {
                const booking = {
                    eventId,
                    userId: "6405f938ee92068933cbb739"
                }
                const newBooking = (await (await Booking.create(booking)).populate('eventId')).populate('userId')
                return newBooking
            }
        } catch (error) {
            throw error
        }
    },
    cancelBooking: async bookingId => {
        try {
            const booking = await Booking.findByIdAndDelete(bookingId)
            if (!booking) {
                throw new Error("Booking not exist")
            } else {
                return booking
            }
        } catch (error) {
            throw error
        }
    },
    getEventByBookingId: async bookingId => {
        try {
            const booking = await Booking.findById(bookingId).populate("eventId")
            if (!booking) {
                throw new Error("Booking not exist")
            } else {
                return booking.eventId
            }
        } catch (error) {
            throw error
        }
    },
    getUserByBookingId: async bookingId => {
        try {
            const booking = await Booking.findById(bookingId).populate("userId")
            if (!booking) {
                throw new Error("Booking not exist")
            } else {
                return booking.userId
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = mongoDataMethods