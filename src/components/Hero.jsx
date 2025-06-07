import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground'; // import component particles nền

export default function Hero() {
	return (
		<section id='home' className='relative min-h-screen lg:px-54 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12  overflow-hidden'>
			{/* Thêm particles nền */}
			<div className='absolute top-0 bottom-0 left-0 right-0'>
				<ParticlesBackground />
			</div>

			<div className='md:w-1/2 text-center md:text-left mb-10 md:mb-0  z-10'>
				<h2 className='text-4xl md:text-5xl font-bold text-green-700 mb-4'>Xin chào! Mình là</h2>
				<h1 className='text-5xl md:text-6xl font-extrabold text-primary mb-4'>Nguyễn Tuấn Anh</h1>

				<p className='text-xl text-gray-700 mb-6'>
					Tôi muốn trở thành:{' '}
					<span className='text-primary font-semibold'>
						<Typewriter words={['Frontend Developer', 'Backend Developer', 'Fullstack Developer']} loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
					</span>
				</p>

				<div className='flex justify-center md:justify-start gap-4 mb-6'>
					<a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer' className='bg-white text-green-600 hover:bg-green-100 p-3 rounded-full shadow transition'>
						<FaGithub size={20} />
					</a>
					<a href='https://facebook.com/yourprofile' target='_blank' rel='noopener noreferrer' className='bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-full shadow transition'>
						<FaFacebook size={20} />
					</a>
					<a href='https://instagram.com/yourprofile' target='_blank' rel='noopener noreferrer' className='bg-white text-pink-500 hover:bg-pink-100 p-3 rounded-full shadow transition'>
						<FaInstagram size={20} />
					</a>
					<a href='https://linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer' className='bg-white text-blue-700 hover:bg-blue-100 p-3 rounded-full shadow transition'>
						<FaLinkedin size={20} />
					</a>
				</div>

				<a href='/cv.pdf' download className='inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-green-600 transition'>
					Tải CV
				</a>
			</div>

			{/* Bên phải: Ảnh đại diện */}
			<div className='md:w-1/2 flex justify-center relative z-10'>
				<img src='/Avatar.jpg' alt='Developer' className='lg:w-100 lg:h-100 md:w-80 md:h-80 rounded-full shadow-lg object-cover' />
			</div>
		</section>
	);
}
