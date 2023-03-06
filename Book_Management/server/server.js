require('dotenv').config()
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const mongoose = require('mongoose')
const mongoDataMethods = require('./data/dbMethod')

// Load Schema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// connect DB
const connectDB = async (uri) => {
    mongoose.set('strictQuery', false)
    return mongoose.connect(uri)
        .then(() => console.log("CONNECT TO THE DB..."))
        .catch((err) => console.log(err))
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        const { url } = await startStandaloneServer(server, {
            context: () => ({ mongoDataMethods })
        })
        console.log(`Server ready at ${url}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()