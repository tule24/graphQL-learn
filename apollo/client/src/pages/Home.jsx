import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { TrackCard, QueryResult } from '../components'
import { TRACKS } from '../graphql/query'

const Home = () => {
    const { loading, error, data } = useQuery(TRACKS)
    return (
        <QueryResult loading={loading} error={error} data={data}>
            <div className='container mx-auto grid grid-cols-3 gap-5'>
                {data?.tracksForHome?.map((track, i) => <Link to={`trackDetail/${track.id}`}><TrackCard track={track} key={i} /></Link>)}
            </div>
        </QueryResult>
    )
}

export default Home