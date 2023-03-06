import React from 'react'
import { useQuery } from '@apollo/client'
import { getBook } from '../graphql-client/queries'

const CAuthor = ({ bookId }) => {
    const { loading, error, data } = useQuery(getBook, {
        variables: {
            id: bookId
        },
        skip: bookId === null
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something error</p>
    const { book } = data
    const { author } = book
    return (
        <div className='p-5 flex-grow'>
            <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 w-full'>
                <h1 className='text-center text-5xl text-bold mb-5'>{book.name}</h1>
                <p>Genre: {book.genre}</p>
                <p>Author: {author.name}</p>
                <p>Author-age: {author.age}</p>
                <p>Other books of author:</p>
                <ul className='list-disc ml-10'>
                    {author.books.filter(ele => ele.id != book.id).map((ele, i) => <li key={i}>{ele.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default CAuthor