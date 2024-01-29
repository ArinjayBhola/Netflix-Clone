import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import MovieDetail from './MovieDetail'
import Error from './Error'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            errorElement: <Error />
        },
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/trailer/:id",
            element: <MovieDetail />
        }
    ]);

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body

