import React, { useState } from 'react';
import Button from '../components/ui/Button';

interface ProductProp {
	title: string;
	price: number;
	category: string;
	describe: string;
	options: [string];
}

const NewProduct = () => {
	const [product, setProduct] = useState<ProductProp | undefined>(undefined);
	const [file, setFile] = useState<File | null>();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, files } = e.target;
		if (name === 'file') {
			setFile(files && files[0]);
			return;
		}
		setProduct((product: any) => ({ ...product, [name]: value }));
	};

	return (
		<section>
			{file && <img src={URL.createObjectURL(file)} alt='local file' />}
			<form onSubmit={handleSubmit}>
				<input type='file' accept='image/*' name='file' required onChange={handleChange} />
				<input type='text' name='title' value={product?.title ?? ''} placeholder='제품명' required onChange={handleChange} />
				<input type='number' name='price' value={product?.price ?? ''} placeholder='가격' required onChange={handleChange} />
				<input type='text' name='category' value={product?.category ?? ''} placeholder='카테고리' required onChange={handleChange} />
				<input type='text' name='describe' value={product?.describe ?? ''} placeholder='제품 설명' required onChange={handleChange} />
				<input type='text' name='options' value={product?.options ?? ''} placeholder='옵션들(콤마(,)로 구분하기)' required onChange={handleChange} />
			</form>
			<Button text={'제품 등록'} />
		</section>
	);
};

export default NewProduct;
