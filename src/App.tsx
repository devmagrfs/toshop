import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './App.css';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'products', element: <AllProducts /> },
			{ path: 'products/:id', element: <ProductDetail /> },
			{ path: 'products/new', element: <NewProduct /> },
			{ path: 'cart', element: <Cart /> },
			{ path: 'favorite', element: <Favorite /> },
		],
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
