import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { ReactComponent as Logo } from '../assets/ToShopLogo.svg';
import { login } from '../api/firebase';

const Header = () => {
	return (
		<header className='flex justify-between items-center w-full border-b border-zinc-600 mb-4 p-4'>
			<Link to='/' className='flex items-center text-4xl text-brand font-bold'>
				<Logo />
				<h1 className='ml-2'>ToShop</h1>
			</Link>
			<nav className='flex justify-end items-center text-2xl font-semibold w-full gap-3'>
				<span className='cursor-pointer'>Menu</span>
				<Link to='/favorite'>
					<span>즐겨찾기</span>
				</Link>
				<Link to='/products/new'>
					<BsPencilSquare />
				</Link>
				<Link to='/cart'>
					<AiOutlineShoppingCart />
				</Link>
				<AiOutlineLogin className='cursor-pointer' onClick={login} />
			</nav>
		</header>
	);
};

export default Header;
