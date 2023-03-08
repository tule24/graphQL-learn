import { GRAPHQL_SERVER } from "./constant"
export const request = async (payload, option) => {
    const res = await fetch(`${GRAPHQL_SERVER}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            ...option
        },
        body: JSON.stringify(payload)
    })

    const { data } = await res.json()
    return data
}