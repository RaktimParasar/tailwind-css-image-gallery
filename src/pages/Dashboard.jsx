import Navbar from '../components/Navbar';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className='relative flex min-h-screen'>
				<div className='w-64 px-2 space-y-6 text-blue-100 bg-blue-800 py-7'>
					<a href='!#' className='flex items-center px-4 space-x-2 text-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
						</svg>
						<span className='text-2xl font-extrabold'>Academic</span>
					</a>
					<nav>
						<a
							href='!#'
							className='block px-4 py-2.5 transition duration-500 rounded-md hover:bg-blue-700 hover:text-white'
						>
							Home
						</a>
						<a
							href='!#'
							className='block px-4 py-2.5 transition duration-500 rounded-md hover:bg-blue-700 hover:text-white'
						>
							About
						</a>
						<a
							href='!#'
							className='block px-4 py-2.5 transition duration-500 rounded-md hover:bg-blue-700 hover:text-white'
						>
							Services
						</a>
						<a
							href='!#'
							className='block px-4 py-2.5 transition duration-500 rounded-md hover:bg-blue-700 hover:text-white'
						>
							Features
						</a>
					</nav>
				</div>
				<div className='flex-1 p-10 text-2xl font-bold'>Coming Soon</div>
			</div>
		</>
	);
};

export default Dashboard;
