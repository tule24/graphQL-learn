export const noteLoader = async ({ params }) => {
    const query = `query Note($noteId: ID) {
        note(noteId: $noteId) {
            content
        }
    }`
    const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: {
                noteId: params.noteId
            }
        })
    })
    const { data } = await res.json()
    return data
}