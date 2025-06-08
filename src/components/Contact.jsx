import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
const Contact = () => {
	return (
		<section id='contact' className='py-20 px-4 sm:px-6 '>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-4'>Liên Hệ Với Tôi</h2>
				<p className='text-gray-600 text-center max-w-2xl mx-auto mb-12'>Bạn có câu hỏi hay muốn trao đổi điều gì? Hãy điền thông tin bên dưới, tôi sẽ phản hồi sớm nhất!</p>

				<div className='bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
					{/* Phần hình ảnh */}
					<div className='hidden lg:block relative h-full min-h-[400px]'>
						<img src='Avatar.jpg' alt='Contact' className='w-full h-full object-cover absolute inset-0' />
						<div className='absolute inset-0 bg-gradient-to-t from-green-800/20 to-blue-800/20'></div>
						<div className='absolute bottom-8 left-8 text-white'>
							<h3 className='text-2xl font-bold mb-2'>Kết nối với tôi</h3>
							<p className='mb-4'>Tôi luôn sẵn sàng lắng nghe và trao đổi với bạn</p>
							<div className='flex space-x-4'>
								<a href='https://www.facebook.com/deophaisadboiz' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<FaFacebook className='w-5 h-5' />
								</a>
								<a href='https://www.instagram.com/anhnt15_dc/' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<FaInstagram className='w-5 h-5' />
								</a>
								<a href='https://github.com/anhnt-24' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<FaGithub className='w-5 h-5' />
								</a>
								<a href='https://www.linkedin.com/in/tu%E1%BA%A5n-anh-nguy%E1%BB%85n-b36898346/' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<FaLinkedinIn className='w-5 h-5' />
								</a>
							</div>
						</div>
					</div>

					{/* Phần form */}
					<div className='p-8 md:p-12'>
						<form className='space-y-6'>
							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Họ tên *</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
											<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
										</svg>
									</div>
									<input
										type='text'
										placeholder='Nguyễn Văn A'
										className='block w-full outline-none pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
										required
									/>
								</div>
							</div>

							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Email *</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
											<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
											<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
										</svg>
									</div>
									<input
										type='email'
										placeholder='email@example.com'
										className='block outline-none w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
										required
									/>
								</div>
							</div>

							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Chủ đề</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
											<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z' clipRule='evenodd' />
										</svg>
									</div>
									<input
										type='text'
										placeholder='Chủ đề bạn muốn trao đổi'
										className='block outline-none w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
									/>
								</div>
							</div>

							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Nội dung *</label>
								<textarea
									rows={4}
									placeholder='Xin chào, tôi muốn trao đổi về...'
									className='block outline-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none'
									required></textarea>
							</div>

							<button type='submit' className='w-full cursor-pointer bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg'>
								Gửi tin nhắn
								<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline ml-2' viewBox='0 0 20 20' fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
