import React from 'react'
import { useQuery } from '@apollo/client'
import { TrackCard, QueryResult } from '../components'
import { TRACKS } from '../graphql/query'

const Home = () => {
    const { loading, error, data } = useQuery(TRACKS)
    return (
        <QueryResult loading={loading} error={error} data={data}>
            <div className='container mx-auto grid grid-cols-3 gap-5 w-[90%]'>
                {data?.tracksForHome?.map(track => <TrackCard track={track} key={track.id} />)}
            </div>
        </QueryResult>
    )
}

export default Home