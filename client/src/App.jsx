import './App.css'

function App() {

  return (
    <div className="container mx-auto bg-violet-500 p-5">
      <h1 className='text-8xl text-center'>MY BOOKS</h1>
      <div className='grid grid-cols-2 my-10'>
        <div className='border-r border-black p-8'>
          <h1 className='text-4xl font-semibold text-center'>ADD BOOK</h1>
          <form className='flex flex-col mt-7'>
            <div className='mt-7'>
              <label class="block mb-2 text-sm font-medium text-white">BOOK NAME</label>
              <input type="text" name="name" class="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none" />
            </div>
            <div className='mt-7'>
              <label class="block mb-2 text-sm font-medium text-white">BOOK GENRE</label>
              <input type="text" name="genre" class="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none" />
            </div>
            <div className='mt-7'>
              <label class="block mb-2 text-sm font-medium text-white">AUTHOR</label>
              <select name="authorId" id="author" class="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 focus:border-blue-500 outline-none">
                <option value="" className='bg-gray-700'>Select author</option>
                <option value="" className='bg-gray-700'>Nam Cao</option>
                <option value="" className='bg-gray-700'>Vu Trong Phung</option>
                <option value="" className='bg-gray-700'>To Huu</option>
              </select>
            </div>
            <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 hover:bg-gray-100 hover:bg-opacity-20 w-32 mx-auto mt-10">ADD +</button>
          </form>
        </div>
        <div className='p-8'>
          <h1 className='text-4xl font-semibold text-center'>ADD AUTHOR</h1>
          <form className='flex flex-col mt-7'>
            <div className='mt-7'>
              <label class="block mb-2 text-sm font-medium text-white">AUTHOR NAME</label>
              <input type="text" name="name" class="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none" />
            </div>
            <div className='mt-7'>
              <label class="block mb-2 text-sm font-medium text-white">AUTHOR GENRE</label>
              <input type="number" name="age" class="block w-full p-2 border rounded-lg sm:text-md focus:ring-blue-500 bg-gray-200 bg-opacity-20 placeholder-gray-400 text-white focus:border-blue-500 outline-none" />
            </div>
            <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 hover:bg-gray-100 hover:bg-opacity-20 w-32 mx-auto mt-10">ADD +</button>
          </form>
        </div>
      </div>
      <hr className='border-black' />
      <div className='flex mt-10 items-start'>
        <div className='w-2/3 p-5 grid grid-cols-3 gap-5 border-r border-black'>
          <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 shadow-lg'>Chi Pheo</div>
          <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 shadow-lg'>Chi Pheo</div>
          <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 shadow-lg'>Chi Pheo</div>
          <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 shadow-lg'>Chi Pheo</div>
          <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 shadow-lg'>Chi Pheo</div>
        </div>
        <div className='p-5 flex-grow'>
          <div className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 w-full'>Chi Pheo</div>
        </div>
      </div>
    </div>
  )
}

export default App
