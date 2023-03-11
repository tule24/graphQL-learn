export const typeDefs = `#graphql
    type Query {
        latestReview: [Review!]!
    }

    type Mutation {
        submitReview(locationReview: LocationReviewInput): SubmitReviewResponse
    }

    type Review {
        id: ID!
        comment: String!
        rating: Int!
    }

    input LocationReviewInput {
        comment: String!
        rating: Int!
        locationId: ID!
    }

    type SubmitReviewResponse {
        code: Int!
        success: Boolean!
        message: String!
        locationReview: Review
    }
`