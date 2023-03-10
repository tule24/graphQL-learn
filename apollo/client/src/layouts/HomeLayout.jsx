import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'
const HomeLayout = () => {
    return (
        <div className='w-screen h-full'>
            <Header />
            <div className=' bg-slate-300 py-10'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout