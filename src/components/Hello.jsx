import React from 'react';
import useCountRenders from '../hooks/useCountRenders';
const Hello = React.memo(({ increment }) => {
	useCountRenders();
	return (
		<button
			className='h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800'
			onClick={increment}
		>
			Counter
		</button>
	);
});

export default Hello;
