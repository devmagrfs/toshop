import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [{ index: true, element: <Home /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
