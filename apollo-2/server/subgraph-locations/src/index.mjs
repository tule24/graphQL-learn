import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.mjs'
import { resolvers } from './resolvers.mjs'
import { LocationsAPI } from './dataSources/location-api.mjs'

const start = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const PORT = process.env.PORT || 4001
    const subgraphName = "locations"

    try {
        const { url } = await startStandaloneServer(server, {
            listen: PORT,
            context: async () => {
                return {
                    dataSources: {
                        locationsAPI: new LocationsAPI()
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