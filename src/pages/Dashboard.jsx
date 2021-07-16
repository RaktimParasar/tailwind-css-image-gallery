import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';

const Dashboard = () => {
	return (
		<>
			<div className='hidden md:block'>
				<Navbar />
			</div>
			<div className='relative min-h-screen md:flex'>
				<Sidebar />
				<div className='flex-1 p-10'>
					<h3 className='text-2xl font-bold text-gradient bg-gradient-to-t from-yellow-400 to-fuchsia-600 font-poppins'>
						Tailwind stories
					</h3>
					<ul className='flex flex-wrap gap-6 mt-5 mb-5'>
						<li className='flex flex-col items-center space-y-1 '>
							<div className='relative p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600'>
								<a className='block p-1 bg-white rounded-full' href='!#'>
									<img
										className='w-24 h-24 duration-300 transform rounded-full hover:-rotate-6'
										src='https://placekitten.com/200/200'
										alt='cat'
									/>
								</a>
								<button className='create-story'>+</button>
							</div>
							<a className='text-xs font-semibold font-poppins' href='!#'>
								you
							</a>
						</li>
						<li className='flex flex-col items-center space-y-1 '>
							<div className='p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600'>
								<a className='block p-1 bg-white rounded-full' href='!#'>
									<img
										className='w-24 h-24 duration-300 transform rounded-full hover:-rotate-6'
										src='https://placekitten.com/200/201'
										alt='cat'
									/>
								</a>
							</div>
							<a className='text-xs font-semibold font-poppins' href='!#'>
								cat_744
							</a>
						</li>
						<li className='flex flex-col items-center space-y-1 '>
							<div className='p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600'>
								<a className='block p-1 bg-white rounded-full' href='!#'>
									<img
										className='w-24 h-24 duration-300 transform rounded-full hover:-rotate-6'
										src='https://placekitten.com/200/230'
										alt='cat'
									/>
								</a>
							</div>
							<a className='text-xs font-semibold font-poppins' href='!#'>
								cat_cc41
							</a>
						</li>
						<li className='flex flex-col items-center space-y-1 '>
							<div className='p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600'>
								<a className='block p-1 bg-white rounded-full' href='!#'>
									<img
										className='w-24 h-24 duration-300 transform rounded-full hover:-rotate-6'
										src='https://placekitten.com/200/203'
										alt='cat'
									/>
								</a>
							</div>
							<a className='text-xs font-semibold font-poppins' href='!#'>
								cat_0xxzz
							</a>
						</li>
					</ul>
					<Login />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
