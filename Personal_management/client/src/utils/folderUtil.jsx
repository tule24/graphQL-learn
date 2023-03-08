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
    const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: {
                folderId: params.folderId
            }
        })
    })
    const { data } = await res.json()
    return data
}