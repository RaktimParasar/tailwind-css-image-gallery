import React, { useState } from 'react';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');

	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	return (
		<div className='max-w-sm overflow-hidden border-2 border-opacity-0 rounded shadow-lg hover:shadow-2xl hover:border-gray-300'>
			<img
				onClick={openModal}
				className='w-full h-64 cursor-pointer'
				src={image.previewURL}
				alt=''
			/>
			{isOpen && (
				<div className='fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg'>
					<div className='h-64 px-4 py-3 bg-gray-100 rounded-lg shadow-2xl w-80'>
						<div className='flex items-center justify-between'>
							<h3 className='text-lg font-semibold'>Image</h3>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5 cursor-pointer'
								viewBox='0 0 20 20'
								fill='currentColor'
								onClick={closeModal}
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<div className='mt-2'>
							<img className='w-full h-48 rounded' src={image.previewURL} alt='' />
						</div>
					</div>
				</div>
			)}
			<div className='px-6 py-4'>
				<div className='mb-2 text-xs font-bold text-purple-500 md:text-xl sm:text-lg'>
					Photo by {image.user.slice(0, 8)}
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className='px-6 py-6'>
				{tags.map((tag, index) => (
					<span
						key={index}
						className='inline-block px-3 py-2 mb-1 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full cursor-pointer sm:text-sm hover:bg-gray-500 hover:text-gray-50'
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
