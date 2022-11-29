import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { ReactComponent as Logo } from '../assets/ToShopLogo.svg';

const Header = () => {
	return (
		<header className='flex justify-between items-center w-full border-b border-zinc-600 mb-4 p-4'>
			<Link to='/' className='flex items-center'>
				<Logo className='font-bold' />
				<h1 className='text-3xl font-bold ml-2'>ToShop</h1>
			</Link>
			<nav className='flex justify-end items-center text-2xl font-bold w-full'>
				<span className='cursor-pointer mr-3'>Menu</span>
				<span className='cursor-pointer mr-3'>즐겨찾기</span>
				<AiOutlineShoppingCart className='cursor-pointer mr-3' />
				<AiOutlineLogin className='cursor-pointer' />
			</nav>
		</header>
	);
};

export default Header;
