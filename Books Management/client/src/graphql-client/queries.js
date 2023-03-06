import { gql } from '@apollo/client'

export const getBooks = gql`
    query getBooksQuery {
        books {
            id
            name
        }
    }
`

export const getBook = gql`
    query getBookQuery ($id: ID!) {
        book (id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`


export const getAuthors = gql`
    query getAuthorsQuery {
        authors {
            id 
            name
            age
        }
    }
`