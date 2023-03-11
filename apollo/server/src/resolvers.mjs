import fetch from 'node-fetch'
export const resolvers = {
    Query: {
        tracksForHome: async (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome()
        },
        track: async (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id)
        },
        module: async (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getModule(id)
        }
        // tracksForHomeFetch: async () => {
        //     const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com"
        //     const res = await fetch(`${baseUrl}/tracks`)
        //     return res.json();
        // },
    },
    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = dataSources.trackAPI.incrementTrackViews(id)
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                }
            } catch (error) {
                return {
                    code: error.extensions.response.status,
                    success: false,
                    message: error.extensions.response.body,
                    track: null
                }
            }
        }
    },
    Track: {
        author: async ({ authorId }, _, { dataSources }) => {
            // const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com"
            // const res = await fetch(`${baseUrl}/author/${authorId}`)
            // return res.json()
            return dataSources.trackAPI.getAuthor(authorId)
        },
        modules: async ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }
}