import { createBrowserRouter, Outlet } from 'react-router-dom'
import { NoteList, NoteContent } from '../components'
import AuthProvider from '../context/AuthProvider'
import { Home, Login, ErrorPage } from '../pages'
import ProtectedRoute from './protectedRoute'
import { folderLoader } from '../utils/folderUtil'
import { homeLoader } from '../utils/homeUtil'
import { noteLoader } from '../utils/noteUtil'

const AuthLayout = () => {
    return <AuthProvider>
        <div className='w-screen h-screen bg-gray-500'>
            <div className='container mx-auto p-10'>
                <Outlet />
            </div>
        </div>
    </AuthProvider>
}
export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: '/',
                        loader: homeLoader,
                        children: [
                            {
                                element: <NoteList />,
                                path: 'folders/:folderId',
                                loader: folderLoader,
                                children: [
                                    {
                                        element: <NoteContent />,
                                        loader: noteLoader,
                                        path: 'note/:noteId'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
])