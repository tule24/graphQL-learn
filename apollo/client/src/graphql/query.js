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

export const TRACK = gql`
    query ($trackId: ID!) {
        track(id: $trackId) {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
            description
            numberOfViews
            modules {
                id
                title
                length
            }
        }
    }
`