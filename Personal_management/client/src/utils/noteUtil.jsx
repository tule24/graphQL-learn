import { request } from "./request"

export const noteLoader = async ({ params }) => {
    const query = `query Note($noteId: ID) {
        note(noteId: $noteId) {
            content
        }
    }`
    const payload = {
        query,
        variables: {
            noteId: params.noteId
        }
    }
    const data = request(payload)
    return data
}