import React, { useState } from 'react'
import { BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs'
import { formatTime } from '../helpers'
import ReactPlayer from 'react-player/youtube'
const ModuleComps = ({ data }) => {
    const { track } = data
    const { modules } = track
    const [curModule, setCurModule] = useState(modules[0])
    return (
        <div>
            <div className='grid grid-cols-[2fr_1fr] -mt-10 p-5 bg-black min-h-[70vh]' >
                <div className='bg-red-500 bg-opacity-50 rounded-lg overflow-hidden'>
                    <ReactPlayer url={curModule.videoUrl} width="100%" height="100%" controls />
                </div>
                <div>
                    <div className='text-center bg-slate-800 shadow-lg w-[95%] mx-auto rounded-lg overflow-hidden'>
                        <div className='border-b-2 border-violet-600 p-5 text-xl font-semibold text-white tracking-widest'>{track.title}</div>
                        {modules.map(el => <div
                            className={`${el.id === curModule.id ? 'bg-slate-500' : 'bg-slate-700 '}border-b border-slate-500 p-5 flex justify-between items-center text-gray-200 cursor-pointer`}
                            key={el.id}
                            onClick={() => setCurModule(el)}
                        >
                            {el.id === curModule.id ? <BsChevronDoubleRight /> : <BsChevronRight />}
                            <span>{el.title}</span>
                            <span>{formatTime(el.length)}</span>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className='container mx-auto w-1/2 py-10'>
                <h1 className='text-3xl font-semibold'>{curModule.title}</h1>
                <hr className='border-pink-500 border-b-2 my-2' />
                <p>
                    {curModule.content}
                </p>
            </div>
        </div>
    )
}

export default ModuleComps