import { createBrowserRouter } from 'react-router-dom'
import { Home, ErrorPage, Detail, Module } from '../pages'
import HomeLayout from '../layouts/HomeLayout'
export default createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'trackDetail/:trackId',
                element: <Detail />
            },
            {

                path: 'trackDetail/:trackId/modules',
                element: <Module />
            }
        ]
    }
])