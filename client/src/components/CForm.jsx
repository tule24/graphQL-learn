import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getAuthors, getBooks } from '../graphql-client/queries'
import { addBook, addAuthor } from '../graphql-client/mutation'

const CForm = () => {
    const { loading, error, data } = useQuery(getAuthors)
    const [addSingleBook] = useMutation(addBook)
    const [addSingleAuth] = useMutation(addAuthor)
    const [formInput, setFormInput] = useState({})

    const handleSubmit = (e, type) => {
        e.preventDefault()
        if (type === 'auth') {
            addSingleAuth({
                variables: { ...formInput },
                refetchQueries: [{ query: getAuthors }]
            })
            document.getElementById("form-add-author").reset()
        } else {
            addSingleBook({
                variables: { ...formInput },
                refetchQueries: [{ query: getBooks }]
            })
            document.getElementById("form-add-book").reset()
        }
        setFormInput({})
    }

    const handleInput = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value })
    }
    return (
        <div className='grid grid-cols-2 my-10'>
            <div className='border-r border-black p-8'>
                <h1 className='text-4xl font-semibold text-center'>ADD BOOK</h1>
                <form id="form-add-book" className='flex flex-col mt-7' onSubmit={(e) => handleSubmit(e, 'book')}>
                    <div className='mt-7'>
                        <label className="block mb-2 text-sm font-medium text-white">BOOK NAME</label>
                        <input
                            type="text"
                            name="name"
                            className="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none"
                            onBlur={(e) => handleInput(e)}
                        />
                    </div>
                    <div className='mt-7'>
                        <label className="block mb-2 text-sm font-medium text-white">BOOK GENRE</label>
                        <input
                            type="text"
                            name="genre"
                            className="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none"
                            onBlur={(e) => handleInput(e)}
                        />
                    </div>
                    <div className='mt-7'>
                        <label className="block mb-2 text-sm font-medium text-white">AUTHOR</label>
                        <select
                            name="authorId"
                            id="author"
                            className="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 focus:border-blue-500 outline-none"
                            onChange={(e) => handleInput(e)}
                        >
                            <option value="" className='bg-gray-700'>Select author</option>
                            {data && data.authors.map(author => <option value={author.id} className='bg-gray-700' key={author.id}>{author.name}</option>)}
                        </select>
                    </div>
                    <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 hover:bg-gray-100 hover:bg-opacity-20 w-32 mx-auto mt-10">ADD +</button>
                </form>
            </div>
            <div className='p-8'>
                <h1 className='text-4xl font-semibold text-center'>ADD AUTHOR</h1>
                <form id="form-add-author" className='flex flex-col mt-7' onSubmit={(e) => handleSubmit(e, 'auth')}>
                    <div className='mt-7'>
                        <label className="block mb-2 text-sm font-medium text-white">AUTHOR NAME</label>
                        <input
                            type="text"
                            name="name"
                            className="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none"
                            onBlur={(e) => handleInput(e)}
                        />
                    </div>
                    <div className='mt-7'>
                        <label className="block mb-2 text-sm font-medium text-white">AUTHOR AGE</label>
                        <input
                            type="number"
                            name="age"
                            className="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none"
                            onBlur={(e) => handleInput(e)}
                        />
                    </div>
                    <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 hover:bg-gray-100 hover:bg-opacity-20 w-32 mx-auto mt-10">ADD +</button>
                </form>
            </div>
        </div>
    )
}

export default CForm