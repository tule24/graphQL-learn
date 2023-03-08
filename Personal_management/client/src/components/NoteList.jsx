import React from 'react'
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom'
const NoteList = () => {
    const folder = [{ id: 1 }]
    const { noteId } = useParams()
    const { notes } = useLoaderData()

    return (
        <div className='grid grid-cols-[1fr_2fr] h-full'>
            <div className='p-5 bg-gray-600'>
                <h1 className='text-center text-3xl font-semibold text-white'>NOTE LIST</h1>
                <hr className='my-5' />
                {folder.map(({ id }) => (
                    <Link key={id} to={`note/${id}`}>
                        <div className={`${noteId === id ? "bg-green-300" : ""} flex w-full items-center justify-between p-6 sm:py-8 bg-slate-400 rounded-2xl`}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='p-5 bg-white'>
                <h1 className='text-center text-3xl font-semibold mb-5 text-black'>NOTE CONTENT</h1>
                <hr className='border-black' />
                <Outlet />
            </div>
        </div>
    )
}

export default NoteList