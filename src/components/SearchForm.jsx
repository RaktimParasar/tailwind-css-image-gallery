import { useState } from 'react';

const SearchForm = ({ searchedText }) => {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		searchedText(text);
	};
	return (
		<div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
			<form onSubmit={onSubmit} className='w-fill max-w-sm'>
				<div className='flex items-center border-b-2 border-green-500 py-2'>
					<input
						onChange={(e) => setText(e.target.value)}
						className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-500'
						text='type'
						placeholder='Search Image Term'
					/>
					<button
						className='flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1px-2 rounded'
						type='submit'
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
