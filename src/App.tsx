import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './App.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [{ index: true, element: <Home /> }],
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
