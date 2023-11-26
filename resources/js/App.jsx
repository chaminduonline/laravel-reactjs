import React from 'react';
import {
    useRoutes
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default function App() {

    let element = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
    ]);

    return element;
}
