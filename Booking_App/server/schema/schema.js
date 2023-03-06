const typeDefs = `#graphql
    type Event {
        id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
        bookings: [Booking]
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
        creatorId: String!
    }

    type User {
        id: ID!
        email: String!
        password: String!
        createdEvents: [Event]
    }

    input UserInput {
        email: String!
        password: String!
    }

    type Booking {
        id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
    }

    # ROOT TYPE
    type Query {
        events: [Event]
        event (eventId: ID!): Event 
        users: [User]
        user (userId: ID!): User
        bookings: [Booking]
        booking (bookingId: ID!): Booking
    }

    type Mutation {
        createEvent (eventInput: EventInput): Event
        createUser (userInput: UserInput): User
        bookEvent (eventId: ID!): Booking
        cancelBooking (bookingId: ID!): Event
    }
`

module.exports = typeDefs