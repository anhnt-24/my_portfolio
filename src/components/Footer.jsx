import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMail } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineSchool } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white px-6 py-16'>
			<div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-12'>
				{/* Column 1 - About */}
				<div className='space-y-6'>
					<h3 className='text-2xl font-bold text-green-400'>Nguyễn Tuấn Anh</h3>
					<p className='text-gray-300 leading-relaxed'>Cảm ơn bạn đã ghé thăm portfolio của tôi. Hãy kết nối với tôi qua các nền tảng mạng xã hội hoặc gửi tin nhắn trực tiếp.</p>
					<div className='flex space-x-4'>
						<a href='https://www.linkedin.com/in/tu%E1%BA%A5n-anh-nguy%E1%BB%85n-b36898346/' className='text-gray-300 hover:text-green-400 transition-colors'>
							<FaLinkedin className='w-6 h-6' />
						</a>
						<a href='https://github.com/anhnt-24' className='text-gray-300 hover:text-gray-100 transition-colors'>
							<FaGithub className='w-6 h-6' />
						</a>
						<a href='https://www.facebook.com/deophaisadboiz' className='text-gray-300 hover:text-green-600 transition-colors'>
							<FaFacebook className='w-6 h-6' />
						</a>
						<a href='https://www.instagram.com/anhnt15_dc/' className='text-gray-300 hover:text-green-600 transition-colors'>
							<FaInstagram className='w-6 h-6' />
						</a>
					</div>
					<p className='mt-4 text-green-400 font-medium'>🚀 Keep Rising. Let's create something amazing together!</p>
				</div>

				{/* Column 2 - Quick Links */}
				<div>
					<h4 className='text-xl font-semibold mb-6 text-green-400'>🔗 Liên kết nhanh</h4>
					<ul className='space-y-4'>
						{[
							{ icon: <AiOutlineHome />, text: 'Trang chủ', href: '#home' },
							{ icon: <AiOutlineUser />, text: 'Giới thiệu', href: '#about' },
							{ icon: <GiSkills />, text: 'Kỹ năng', href: '#skills' },
							{ icon: <MdOutlineSchool />, text: 'Học vấn', href: '#education' },
							{ icon: <AiOutlineFundProjectionScreen />, text: 'Dự án', href: '#projects' },
							{ icon: <AiOutlineMail />, text: 'Liên hệ', href: '#contact' },
						].map((item, index) => (
							<li key={index}>
								<a href={item.href} className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors group'>
									<span className='group-hover:scale-110 transition-transform'>{item.icon}</span>
									<span className='border-b border-transparent group-hover:border-white transition-all'>{item.text}</span>
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Column 3 - Contact */}
				<div>
					<h4 className='text-xl font-semibold mb-6 text-green-400'>📬 Thông tin liên hệ</h4>
					<ul className='space-y-4'>
						<li className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
							<FaPhoneAlt />
							<span>0389 801 058</span>
						</li>
						<li className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
							<FaEnvelope />
							<span>anhnt204.dev@gmail.com</span>
						</li>
						<li className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
							<FaMapMarkerAlt />
							<span>Hà Nội, Việt Nam</span>
						</li>
					</ul>

					{/* Newsletter Subscription */}
					<div className='mt-8'>
						<h5 className='text-gray-300 mb-3'>Đăng ký nhận tin mới</h5>
						<div className='flex'>
							<input type='email' placeholder='Email của bạn' className='px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 w-full' />
							<button className='bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors cursor-pointer'>Gửi</button>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='text-center mt-16 pt-6 border-t border-gray-700'>
				<p className='text-gray-400 text-sm'>
					© {new Date().getFullYear()} Thiết kế với ❤️ bởi <span className='text-green-400 font-semibold'>Nguyễn Tuấn Anh</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
