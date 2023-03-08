import { request } from "./request"

export const folderLoader = async ({ params }) => {
    const query = `query Folder($folderId: ID) {
        folders(folderId: $folderId) {
            id
            name
            notes {
                id
            }
        }
    }`
    const payload = {
        query,
        variables: {
            folderId: params.folderId
        }
    }
    const data = request(payload)
    return data
}