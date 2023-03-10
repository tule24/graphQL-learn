import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
)
