import useLocalStorage from '../hooks/useLocalStorage';

const SearchForm = ({ searchedText }) => {
	const [text, setText] = useLocalStorage('text', '');

	const onSubmit = (e) => {
		e.preventDefault();
		searchedText(text);
	};
	return (
		<div className='max-w-sm mx-auto my-10 overflow-hidden rounded'>
			<form onSubmit={onSubmit} className='max-w-sm w-fill'>
				<div className='flex items-center py-2 border-b-2 border-green-500'>
					<input
						onChange={(e) => setText(e.target.value)}
						className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 placeholder-gray-500 bg-transparent border-none appearance-none focus:outline-none'
						text='type'
						placeholder='Search Image Term'
					/>
					<button
						className='flex-shrink-0 text-sm text-white bg-green-500 border-4 border-green-500 rounded hover:bg-green-700 hover:border-green-700 py-1px-2'
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
