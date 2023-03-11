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

export const MODULES_OF_TRACK = gql`
    query getModulesOfTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
        content
        videoUrl
      }
    }
  }
`

export const MODULE_AND_PARENT_TRACK = gql`
    query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`