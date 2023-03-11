import { RESTDataSource } from '@apollo/datasource-rest'

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"

    async getTracksForHome() {
        return this.get("tracks")
    }

    async getAuthor(authorId) {
        return this.get(`author/${encodeURIComponent(authorId)}`)
    }

    async getTrack(trackId) {
        return this.get(`track/${trackId}`)
    }

    async getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`)
    }
}