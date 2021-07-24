import { useEffect, useRef } from 'react';

const Reports = () => {
	const myBtn = useRef(null);
	const clickIt = () => myBtn.current.click();

	useEffect(() => {
		clickIt();
	}, []);

	const Status = () => {
		console.log('Hello useRef');
		return <p>Button clicked automatically with useRef</p>;
	};

	return (
		<div>
			<button
				onClick={Status}
				className='h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800'
				ref={myBtn}
			>
				hello
			</button>
			<Status />
		</div>
	);
};

export default Reports;
