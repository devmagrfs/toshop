import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
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
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [success, setSuccess] = useState<string | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsUploading(true);
		uploadImage(file) //
			.then((url) => {
				addNewProduct(product, url) //
					.then(() => {
						setSuccess('성공적으로 제품을 등록했습니다.');
						setTimeout(() => {
							setSuccess(null);
						}, 4000);
					});
			})
			.finally(() => setIsUploading(false));
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
			<h2>새 제품 등록</h2>
			{success && <p>이미지 등록 성공!</p>}
			{file && <img src={URL.createObjectURL(file)} alt='local file' />}
			<form onSubmit={handleSubmit}>
				<input type='file' accept='image/*' name='file' required onChange={handleChange} />
				<input type='text' name='title' value={product?.title ?? ''} placeholder='제품명' required onChange={handleChange} />
				<input type='number' name='price' value={product?.price ?? ''} placeholder='가격' required onChange={handleChange} />
				<input type='text' name='category' value={product?.category ?? ''} placeholder='카테고리' required onChange={handleChange} />
				<input type='text' name='describe' value={product?.describe ?? ''} placeholder='제품 설명' required onChange={handleChange} />
				<input type='text' name='options' value={product?.options ?? ''} placeholder='옵션들(콤마(,)로 구분하기)' required onChange={handleChange} />
				<Button text={isUploading ? '업로드중...' : '제품 등록'} disabled={isUploading} />
			</form>
		</section>
	);
};

export default NewProduct;
