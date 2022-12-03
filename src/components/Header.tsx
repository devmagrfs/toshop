import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { ReactComponent as Logo } from '../assets/ToShopLogo.svg';
import { GoogleLogin, logout, onUserStateChange } from '../api/firebase';
import Avatar from './Avatar';
import Button from './ui/Button';

const Header = () => {
	const [user, setUser] = useState<User | any>(null);

	const handleLogin = () => {
		GoogleLogin().then(setUser);
	};

	const handleLogout = () => {
		logout().then(setUser);
	};

	useEffect(() => {
		onUserStateChange((user: any) => {
			setUser(user);
		});
	}, []);

	return (
		<header className='flex justify-between items-center w-full border-b border-zinc-600 mb-4 p-4'>
			<Link to='/' className='flex items-center text-4xl text-brand font-bold'>
				<Logo />
				<h1 className='ml-2'>ToShop</h1>
			</Link>
			<nav className='flex justify-end items-center text-2xl font-semibold w-full gap-3'>
				<span className='cursor-pointer'>Menu</span>
				{user && <Link to='/favorite'>즐겨찾기</Link>}
				{user && user.isAdmin && (
					<Link to='/products/new'>
						<BsPencilSquare />
					</Link>
				)}
				{user && (
					<Link to='/cart'>
						<AiOutlineShoppingCart />
					</Link>
				)}
				{user && <Avatar user={user} />}
				{!user && <Button text={'Login'} onClick={handleLogin} />}
				{user && <Button text={'Logout'} onClick={handleLogout} />}
			</nav>
		</header>
	);
};

export default Header;
