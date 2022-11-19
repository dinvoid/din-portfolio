import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import Allproject from './components/allproject/Allproject'
import './index.css';
import {
    createBrowserRouter,
    RouterProvider

} from "react-router-dom";

const router = createBrowserRouter([{
        path: "/",
        element: < App / > ,
    },
    {
        path: "/Allproject",
        element: < Allproject / > ,
    },

]);

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render( <
    RouterProvider router = { router }
    />
);