import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from './schema'

const PORT = process.env.PORT || 4000
const yoga = createYoga({
    schema
})


const server = createServer(yoga)
server.listen(PORT, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})