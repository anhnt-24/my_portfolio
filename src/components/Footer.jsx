import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMail } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineSchool } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='bg-gradient-to-b from-gray-800 to-gray-900 text-white px-6 py-16'>
			<div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-12'>
				{/* Column 1 - About */}
				<div className='space-y-6'>
					<h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Nguyễn Văn A</h3>
					<p className='text-gray-300 leading-relaxed'>Cảm ơn bạn đã ghé thăm portfolio của tôi. Hãy kết nối với tôi qua các nền tảng mạng xã hội hoặc gửi tin nhắn trực tiếp.</p>
					<div className='flex space-x-4'>
						<a href='#' className='text-gray-300 hover:text-blue-400 transition-colors'>
							<FaLinkedin className='w-6 h-6' />
						</a>
						<a href='#' className='text-gray-300 hover:text-gray-100 transition-colors'>
							<FaGithub className='w-6 h-6' />
						</a>
						<a href='#' className='text-gray-300 hover:text-blue-600 transition-colors'>
							<FaFacebook className='w-6 h-6' />
						</a>
					</div>
					<p className='mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-medium'>🚀 Keep Rising. Let's create something amazing together!</p>
				</div>

				{/* Column 2 - Quick Links */}
				<div>
					<h4 className='text-xl font-semibold mb-6 flex items-center'>
						<span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>🔗 Liên kết nhanh</span>
					</h4>
					<ul className='space-y-4'>
						{[
							{ icon: <AiOutlineHome className='text-green-400' />, text: 'Trang chủ', href: '#home' },
							{ icon: <AiOutlineUser className='text-blue-400' />, text: 'Giới thiệu', href: '#about' },
							{ icon: <GiSkills className='text-purple-400' />, text: 'Kỹ năng', href: '#skills' },
							{ icon: <MdOutlineSchool className='text-yellow-400' />, text: 'Học vấn', href: '#education' },
							{ icon: <AiOutlineFundProjectionScreen className='text-red-400' />, text: 'Dự án', href: '#projects' },
							{ icon: <AiOutlineMail className='text-pink-400' />, text: 'Liên hệ', href: '#contact' },
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
					<h4 className='text-xl font-semibold mb-6 flex items-center'>
						<span className='bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text'>📬 Thông tin liên hệ</span>
					</h4>
					<ul className='space-y-4'>
						<li className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
							<FaPhoneAlt className='text-green-400' />
							<span>0123 456 789</span>
						</li>
						<li className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
							<FaEnvelope className='text-blue-400' />
							<span>nguyenvana@example.com</span>
						</li>
						<li className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
							<FaMapMarkerAlt className='text-red-400' />
							<span>TP.HCM, Việt Nam</span>
						</li>
					</ul>

					{/* Newsletter Subscription */}
					<div className='mt-8'>
						<h5 className='text-gray-300 mb-3'>Đăng ký nhận tin mới</h5>
						<div className='flex'>
							<input type='email' placeholder='Email của bạn' className='px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 w-full' />
							<button className='bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity'>Gửi</button>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='text-center mt-16 pt-6 border-t border-gray-700'>
				<p className='text-gray-400 text-sm'>
					© {new Date().getFullYear()} Thiết kế với ❤️ bởi <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-semibold'>Nguyễn Văn A</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
