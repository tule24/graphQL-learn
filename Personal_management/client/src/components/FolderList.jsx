import React from 'react'
import { Link, useParams } from 'react-router-dom'

const FolderList = ({ folders }) => {
    const { folderId } = useParams()
    console.log(folderId)
    return (
        <div className='p-5 overflow-y-auto'>
            {folders && folders.map(({ id, name }) => (
                <Link key={id} to={`folders/${id}`}>
                    <div className={`${folderId === id ? 'bg-green-300' : 'bg-slate-400'} flex w-full items-center justify-between p-6 sm:py-8  rounded-2xl mb-5 text-3xl font-semibold`}>
                        <span>{name}</span>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default FolderList