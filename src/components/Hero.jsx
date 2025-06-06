import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
	return (
		<section id='hero' className='min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 bg-green-50'>
			{/* Bên trái: Lời chào và social */}
			<div className='md:w-1/2 text-center md:text-left mb-10 md:mb-0'>
				{/* Nút mạng xã hội */}

				<h2 className='text-4xl md:text-5xl font-bold text-green-700 mb-4'>Xin chào! Mình là</h2>
				<h1 className='text-5xl md:text-6xl font-extrabold text-primary mb-4'>Nguyễn Văn A</h1>

				<p className='text-xl text-gray-700 mb-6'>
					Tôi muốn trở thành:{' '}
					<span className='text-primary font-semibold'>
						<Typewriter words={['Backend Developer', 'Fullstack Developer', 'Frontend Developer']} loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
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
			<div className='md:w-1/2 flex justify-center'>
				<img src='/Avatar.jpg' alt='Developer' className='w-72 h-72 md:w-80 md:h-80 rounded-full shadow-lg object-cover' />
			</div>
		</section>
	);
}
