import React from 'react';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');

	return (
		<div className='max-w-sm rounded overflow-hidden shadow-xl'>
			<img className='w-full h-64' src={image.previewURL} alt='' />
			<div className='px-6 py-4'>
				<div className='font-bold text-purple-500 text-xl mb-2'>Photo by {image.user}</div>
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
						className='inline-block bg-gray-200 hover:bg-gray-500 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-50 mr-2 cursor-pointer mb-1'
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
