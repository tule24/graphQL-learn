import React from 'react'

const LoadingSpiner = () => {
    return (
        <div className='flex items-center justify-center h-[70vh]'>
            <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    )
}

export default LoadingSpiner