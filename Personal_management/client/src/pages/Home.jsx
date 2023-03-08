import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { FolderList, UserMenu } from '../components'

const Home = () => {
  const { folders } = useLoaderData()
  return (
    <div >
      <h1 className='text-3xl text-green-500 font-semibold text-center tracking-widest'>HOME PAGE</h1>
      <UserMenu />
      <div className='grid grid-cols-[1fr_2fr] mt-8 shadow-lg bg-gray-200'>
        <div className='w-full bg-gray-900 p-5'>
          <h1 className='text-center text-3xl font-semibold mb-5 text-white'>FOLDER LIST</h1>
          <hr />
          <FolderList folders={folders} />
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home