import { useCallback, useEffect, useRef, useState } from 'react';
import Hello from '../components/Hello';

const Reports = () => {
	const [count, setCount] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const myBtn = useRef(null);
	const clickIt = () => myBtn.current.click();

	useEffect(() => {
		clickIt();
		window.addEventListener('resize', updateWindowWidth);
	}, []);

	const Status = () => {
		console.log('Hello useRef');
		return <p>Button clicked automatically with useRef</p>;
	};

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	const increment = useCallback(() => {
		setCount((c) => c + 1);
	}, [setCount]);
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
			<h1 className='mt-5'>The window width is {windowWidth} pixels</h1>
			<h1 className='mt-5'>UseCallback, useMemo example:</h1>
			<Hello increment={increment} />
			<div>count: {count}</div>
		</div>
	);
};

export default Reports;
