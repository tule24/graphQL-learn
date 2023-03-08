import { request } from "./request"

export const homeLoader = async () => {
    const query = `query Folders {
        folders {
            id
            name
            createdAt
        }
    }`
    const payload = {
        query
    }
    const data = request(payload)
    return data
}