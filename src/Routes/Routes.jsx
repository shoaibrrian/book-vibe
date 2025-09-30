import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/root/Root';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import BookDetails from '../pages/bookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                path: "/",
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails
            }
        ]
    },
]);