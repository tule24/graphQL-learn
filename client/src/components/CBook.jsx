import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getBooks } from '../graphql-client/queries'
import CAuthor from './CAuthor'

const CBook = () => {
    const [bookSelected, setBookSelected] = useState("6404faa71ee654fe5dc28fcc")
    const { loading, error, data } = useQuery(getBooks)
    if (loading) return <p>Loading books....</p>
    if (error) return <p>Something wrong !!!</p>
    return (
        <div className='flex mt-10 items-start'>
            <div className='w-2/3 p-5 grid grid-cols-3 gap-5 border-r border-black'>
                {data.books.map((book, i) => <div
                    className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 shadow-lg cursor-pointer hover:bg-gray-200 hover:bg-opacity-20'
                    key={i}
                    onClick={() => setBookSelected(book.id)}
                >
                    {book.name}
                </div>)
                }
            </div>
            <CAuthor bookId={bookSelected} />
        </div>
    )
}

export default CBook