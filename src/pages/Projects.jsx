import Blog from '../components/Blog';
import Brand from '../components/Brand';
import ContactUs from '../components/ContactUs';
import Content from '../components/Content';
import Steps from '../components/Steps';
import Footer from '../components/Footer';

const Projects = () => {
	return (
		<div>
			<h1 className='px-2 py-8 text-2xl font-semibold text-center text-purple-800 font-poppins'>
				Tailwind Components
			</h1>
			<Blog />
			<ContactUs />
			<Content />
			<Brand />
			<Steps />
			<Footer />
		</div>
	);
};

export default Projects;
