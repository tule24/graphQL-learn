export const typeDefs = `#graphql
    type Query {
        tracksForHome: [Track!]!
        track (id: ID!): Track
        # tracksForHomeFetch: [Track!]!
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String!
        length: Int!
        modulesCount: Int!
        description: String!
        numberOfViews: Int!
        modules: [Module!]!
    }

    type Module {
        id: ID!
        title: String!
        length: Int!
    }

    type Author {
        id: ID!
        name: String!
        photo: String!
    }
`