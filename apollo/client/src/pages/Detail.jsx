import React from 'react'
import { useParams } from 'react-router-dom'
import { BsEye, BsBook, BsClock, BsPlay } from 'react-icons/bs'
const Detail = () => {
  const param = useParams()
  return (
    <div className='container mx-auto flex flex-col items-center'>
      <img src="https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg" alt="meomeo" className='block w-3/4' />
      <div className='p-5 bg-slate-200 shadow-lg mt-10 w-3/4'>
        <h1 className='text-center text-5xl font-semibold tracking-widest'>abcxyx</h1>
        <div className='flex justify-between my-5 items-center border-y border-white py-3'>
          <div className='flex flex-col'>
            <p>Track details</p>
            <p className='flex items-center'><BsEye className='mr-2'/> 0 views()</p>
            <p className='flex items-center'><BsBook  className='mr-2'/>10 modules</p>
            <p className='flex items-center'><BsClock  className='mr-2'/>39m</p>
          </div>
          <div className='flex flex-col'>
            <p>Author</p>
            <p>10 modules</p>
            <p>Henri, le Chat Noir</p>
          </div>
          <button className='px-4 py-2 bg-pink-500 flex items-center text-lg'><BsPlay size={30}/>Start Track</button>
        </div>
        <div className='mx-auto w-1/4 py-5'>
          <h1 className='text-center text-4xl font-semibold mb-5'>Modules</h1>
          <div className=' space-y-1'>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
            <div className='flex justify-between'>
              <p>abcxiyads</p>
              <p className='text-gray-400'>4m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail