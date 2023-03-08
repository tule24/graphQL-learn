import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import dummyData from './dummyData.mjs'
const { folders, authors, notes } = dummyData
const app = express()
const httpServer = http.createServer(app)

// The GraphQL schema
const typeDefs = `#graphql
  type Folder {
    id: ID!,
    name: String!,
    createdAt: String!,
    author: Author!,
    notes: [Note]
  }

  type Author {
    id: ID!,
    name: String!
  }

  type Note {
    id: ID!,
    content: String,
    folder: Folder,
    author: Author
  }

  type Query {
    folders: [Folder],
    folder (folderId: ID!): Folder,
    author (id: ID!): Author,
    note (noteId: ID!): Note
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    folders: (parent, args) => folders,
    folder: (parent, args) => folders.find(el => el.id == args.folderId)
  },
  Folder: {
    author: (parent, args) => authors.find(el => el.id === parent.authorId),
    notes: (parent, args) => notes.filter(el => el.folderId === parent.id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})
await server.start()

app.use(express.json(), cors(), expressMiddleware(server))

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log(`🚀 Server ready at http://localhost:4000`)