import { gql } from '@apollo/client'

export const INCREMENT_TRACK_VIEWS = gql`
    mutation Mutation($incrementTrackViewsId: ID!) {
        incrementTrackViews(id: $incrementTrackViewsId) {
            code
            success
            message
            track {
                id
                numberOfViews
            }
    }
}

`