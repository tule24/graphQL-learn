import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { TRACK } from '../graphql/query'
import { QueryResult, DetailComps } from '../components'

const Detail = () => {
  const { trackId } = useParams()
  const { loading, error, data } = useQuery(TRACK, { variables: { trackId } })
  return (
    <QueryResult loading={loading} error={error} data={data}>
      <DetailComps data={data} />
    </QueryResult>
  )
}

export default Detail