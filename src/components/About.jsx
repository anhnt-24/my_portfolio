import React from 'react';
import { FiMail, FiPhone, FiAward, FiCode, FiUser } from 'react-icons/fi';

const About = () => {
	return (
		<section id='about' className='py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>Về Tôi</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>Chuyên gia Frontend với đam mê tạo ra trải nghiệm người dùng tuyệt vời</p>
				</div>

				<div className='flex flex-col lg:flex-row items-center gap-12'>
					{/* Phần hình ảnh */}
					<div className='w-full lg:w-1/3 flex justify-center relative'>
						<div className='relative group'>
							<img src='/coder.jpg' alt='Profile' className='w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-white group-hover:border-green-500 transition-all duration-500' />
							<div className='absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md'>
								<span className='font-medium'>3+ năm kinh nghiệm</span>
							</div>
						</div>
					</div>

					{/* Phần nội dung */}
					<div className='w-full lg:w-2/3'>
						<div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
							<h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
								<FiUser className='mr-3 text-green-600' />
								Giới thiệu
							</h3>

							<div className='space-y-4 text-gray-700'>
								<p>
									Tôi là một <span className='font-medium text-green-600'>Frontend Developer</span> với hơn 3 năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại. Tôi tập trung vào việc tạo
									ra các giao diện người dùng đẹp mắt, hiệu suất cao và trải nghiệm mượt mà.
								</p>
								<p>
									Với kiến thức chuyên sâu về <span className='font-medium'>React, Next.js và Tailwind CSS</span>, tôi luôn cập nhật những công nghệ mới nhất để mang lại giải pháp tối ưu cho mọi dự
									án.
								</p>
								<p>Niềm đam mê của tôi là biến những ý tưởng phức tạp thành các sản phẩm đơn giản, dễ sử dụng nhưng mạnh mẽ về chức năng.</p>
							</div>

							<div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='flex items-start'>
									<div className='bg-green-100 p-3 rounded-full mr-4'>
										<FiCode className='text-green-600 text-xl' />
									</div>
									<div>
										<h4 className='font-bold text-gray-800 mb-1'>Kỹ năng chính</h4>
										<p className='text-gray-600'>React, JavaScript, Tailwind, UI/UX Design</p>
									</div>
								</div>

								<div className='flex items-start'>
									<div className='bg-green-100 p-3 rounded-full mr-4'>
										<FiAward className='text-green-600 text-xl' />
									</div>
									<div>
										<h4 className='font-bold text-gray-800 mb-1'>Chứng chỉ</h4>
										<p className='text-gray-600'>Frontend Developer Certified (Meta)</p>
									</div>
								</div>
							</div>

							<div className='mt-8 pt-6 border-t border-gray-200'>
								<div className='flex flex-col sm:flex-row gap-4'>
									<div className='flex items-center'>
										<FiMail className='text-green-600 mr-3 text-xl' />
										<div>
											<p className='text-sm text-gray-500'>Email</p>
											<a href='mailto:nguyenvana@example.com' className='text-gray-800 hover:text-green-600 transition-colors font-medium'>
												nguyenvana@example.com
											</a>
										</div>
									</div>

									<div className='flex items-center'>
										<FiPhone className='text-green-600 mr-3 text-xl' />
										<div>
											<p className='text-sm text-gray-500'>Điện thoại</p>
											<a href='tel:0123456789' className='text-gray-800 hover:text-green-600 transition-colors font-medium'>
												0123 456 789
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
