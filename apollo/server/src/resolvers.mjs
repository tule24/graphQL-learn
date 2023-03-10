import fetch from 'node-fetch'
export const resolvers = {
    Query: {
        tracksForHome: async (_, __, { dataSources }) => {
            return await dataSources.trackAPI.getTracksForHome()
        },
        tracksForHomeFetch: async () => {
            const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com"
            const res = await fetch(`${baseUrl}/tracks`)
            return res.json();
        },
    },
    Track: {
        author: async ({ authorId }, _, { dataSources }) => {
            // const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com"
            // const res = await fetch(`${baseUrl}/author/${authorId}`)
            // return res.json()
            return await dataSources.trackAPI.getAuthor(authorId)
        }
    }
}