import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { connectDB } from './db/connect.mjs'
import { typeDefs } from './schema/schema.mjs'
import { resolvers } from './resolver/resolver.mjs'
import { mongoDataMethods } from './db/dbMethod.mjs'
import './firebaseConfig.mjs'

const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await connectDB(process.env.MONGO_URI)
await server.start()

app.use(express.json(), cors(), expressMiddleware(server, {
  context: () => ({ mongoDataMethods })
}))

const PORT = process.env.PORT || 4000
await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))
console.log(`🚀 Server ready at http://localhost:4000`)