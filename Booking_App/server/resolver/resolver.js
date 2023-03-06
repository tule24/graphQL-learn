const resolver = {
    // Query
    Query: {
        events: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllEvent(),
        event: async (parent, { eventId }, { mongoDataMethods }) => await mongoDataMethods.getEventById(eventId),
        users: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllUser(),
        user: async (parent, { userId }, { mongoDataMethods }) => await mongoDataMethods.getUserById(userId),
        bookings: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllBooking(),
        booking: async (parent, { bookingId }, { mongoDataMethods }) => await mongoDataMethods.getBookingById(bookingId)
    },
    Event: {
        creator: async ({ creator }, args, { mongoDataMethods }) => await mongoDataMethods.getUserById(creator),
        bookings: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getAllBooking({ event: id })
    },
    User: {
        createdEvents: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getAllEvent({ creator: id })
    },
    Booking: {
        event: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getEventByBookingId(id),
        user: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getUserByBookingId(id)
    },
    // Mutation
    Mutation: {
        createEvent: async (parent, { eventInput }, { mongoDataMethods }) => await mongoDataMethods.createEvent(eventInput),
        createUser: async (parent, { userInput }, { mongoDataMethods }) => await mongoDataMethods.createUser(userInput),
        bookEvent: async (parent, { eventId }, { mongoDataMethods }) => await mongoDataMethods.createBooking(eventId),
        cancelBooking: async (parent, { bookingId }, { mongoDataMethods }) => await mongoDataMethods.cancelBooking(bookingId)
    }
}

module.exports = resolver