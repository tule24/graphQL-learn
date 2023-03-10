import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import { Home, NotFound } from './pages'

function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path='' element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
