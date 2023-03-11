import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.mjs'
import { resolvers } from './resolvers.mjs'
import { ReviewsAPI } from './dataSources/review-api.mjs'

const start = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const PORT = process.env.PORT || 4002
    const subgraphName = "reviews"

    try {
        const { url } = await startStandaloneServer(server, {
            listen: PORT,
            context: async () => {
                return {
                    dataSources: {
                        reviewsAPI: new ReviewsAPI()
                    }
                }
            }
        })
        console.log(`🚀 Subgraph ${subgraphName} running at ${url}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()