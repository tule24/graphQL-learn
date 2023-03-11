export const typeDefs = `#graphql
    type Query {
        locations: [Location!]!
        location (id: ID!): Location!
    }

    type Location {
        id: ID!
        name: String!
        description: String!
        photo: String!
    }
`