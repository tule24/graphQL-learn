import './App.css'
import { CBook, CForm } from './components'

function App() {
  return (
    <div className="container mx-auto bg-violet-500 p-5">
      <h1 className='text-8xl text-center'>MY BOOKS</h1>
      <CForm />
      <hr className='border-black' />
      <CBook />
    </div>
  )
}

export default App
