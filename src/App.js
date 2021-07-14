import { useState, useEffect } from 'react';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

import ImageCard from './components/ImageCard';
import SearchForm from './components/SearchForm';

function App() {
	const [images, setImages] = useState([]);
	const [isLoader, setIsLoader] = useState(true);
	const [term, setTerm] = useState('tech');

	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
		)
			.then((res) => res.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoader(false);
			})
			.catch((err) => console.log(err));
	}, [term]);

	return (
		<div className='container grid px-3 mx-auto font-poppins place-content-center'>
			<SearchForm searchedText={(text) => setTerm(text)} />

			{!isLoader && images.length === 0 && (
				<h1 className='mx-auto mt-32 text-5xl text-center text-green-300'>No Images Found</h1>
			)}
			{isLoader ? (
				<CgSpinnerTwoAlt className='mx-auto mt-64 text-6xl text-center text-green-500 animate-spin' />
			) : (
				<>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2'>
						{images.map((image) => (
							<ImageCard key={image.id} image={image} />
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
