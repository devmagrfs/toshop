import React from 'react';

interface ButtonProp {
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

const Button = ({ text, onClick, disabled }: ButtonProp) => {
	return (
		<button className='bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110' onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
