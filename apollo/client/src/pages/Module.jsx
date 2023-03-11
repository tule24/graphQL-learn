import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ModuleComps, QueryResult } from '../components'
import { MODULES_OF_TRACK } from '../graphql/query'

const Module = () => {
    const { trackId } = useParams()
    const { loading, error, data } = useQuery(MODULES_OF_TRACK, { variables: { trackId } })
    return (
        <QueryResult loading={loading} error={error} data={data}>
            <ModuleComps data={data} />
        </QueryResult>
    )
}

export default Module