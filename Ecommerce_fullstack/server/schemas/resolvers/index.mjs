import { userResolvers } from "./resolvers.mjs"

export const resolvers = {
    Query: {
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}