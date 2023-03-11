import React from 'react'
import { BsEye, BsBook, BsClock, BsPlay } from 'react-icons/bs'
import { formatTime } from '../helpers'

const DetailComps = ({ data }) => {
    const { author, description, length, modules, modulesCount, numberOfViews, thumbnail, title } = data?.track
    return (
        <div className='container mx-auto flex flex-col items-center'>
            <img src={thumbnail} alt="meomeo" className='block w-3/4' />
            <div className='p-5 bg-slate-200 shadow-lg mt-10 w-3/4'>
                <h1 className='text-center text-5xl font-semibold tracking-widest'>{title}</h1>
                <div className='flex justify-between my-5 items-center border-y border-white py-3'>
                    <div className='flex flex-col'>
                        <p className='font-bold'>Track details</p>
                        <p className='flex items-center'><BsEye className='mr-2' /> {numberOfViews} views()</p>
                        <p className='flex items-center'><BsBook className='mr-2' />{modulesCount} modules</p>
                        <p className='flex items-center'><BsClock className='mr-2' />{formatTime(length)}</p>
                    </div>
                    <div className='flex flex-col items-center space-y-1'>
                        <p className='font-bold'>Author</p>
                        <img src={author?.photo} alt="ava" className='w-10 h-10 rounded-full' />
                        <p>{author.name}</p>
                    </div>
                    <button className='px-4 py-2 bg-pink-500 flex items-center text-lg'><BsPlay size={30} />Start Track</button>
                </div>
                <div className='mx-auto w-1/4 py-5'>
                    <h1 className='text-center text-4xl font-semibold mb-5'>Modules</h1>
                    <div className=' space-y-1'>
                        {modules.map(el => (
                            <div className='flex justify-between' key={el.id}>
                                <p>{el.title}</p>
                                <p className='text-gray-400'>{formatTime(el.length)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='font-bold'>Track description</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailComps