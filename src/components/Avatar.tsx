import React from 'react';
import { User } from 'firebase/auth';

interface AvatarProp {
	user: { photoURL: string; displayName: string };
}

const Avatar = ({ user: { photoURL, displayName } }: AvatarProp) => {
	return (
		<div className='flex items-center'>
			<img className='w-10 h-10 rounded-full mr-2' src={photoURL} alt={displayName} />
			<span className='hidden md:block'>{displayName}</span>
		</div>
	);
};

export default Avatar;
