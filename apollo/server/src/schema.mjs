export const typeDefs = `#graphql
    type Query {
        tracksForHome: [Track!]!
        tracksForHomeFetch: [Track!]!
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String!
        length: Int!
        modulesCount: Int!
    }

    type Author {
        id: ID!
        name: String!
        photo: String!
    }
`