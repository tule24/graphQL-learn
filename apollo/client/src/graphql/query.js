import { gql } from '@apollo/client'

export const TRACKS = gql`
    query {
        tracksForHome {
            id
            title
            thumbnail
            length
            modulesCount
            author {
                id
                name
                photo
            }
        }
    }
`