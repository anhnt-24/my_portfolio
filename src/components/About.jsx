import React from 'react';
import { FiMail, FiPhone, FiAward, FiCode, FiUser, FiMapPin } from 'react-icons/fi';

const About = () => {
	return (
		<section id='about' className='py-20 px-4 sm:px-6 '>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>Về Tôi</h2>
					<p className='text-lg text-gray-600 max-w-4xl mx-auto'> Làm web không chỉ là viết code — đó là hành trình tạo nên trải nghiệm khiến người dùng mỉm cười.</p>
				</div>

				<div className='flex flex-col lg:flex-row items-center gap-12'>
					{/* Phần hình ảnh */}
					<div className='w-full lg:w-1/3 flex justify-center relative'>
						<div className='relative group'>
							<img src='/coder.jpg' alt='Profile' className='w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-white group-hover:border-green-500 transition-all duration-500' />
							<div className='absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md'>
								<span className='font-medium'>Sinh viên năm 3+</span>
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
									Mình là một <span className='font-medium text-green-600'>sinh viên năm 3</span> đam mê phát triển web, định hướng trở thành Fullstack Developer trong tương lai. Mình yêu thích việc
									tạo ra những sản phẩm có giao diện thân thiện và trải nghiệm mượt mà cho người dùng.
								</p>
								<p>
									Hiện tại, mình đang học và thực hành với <span className='font-medium'>Spring Boot, React, NodeJs</span>. Mình luôn tìm cách cập nhật công nghệ mới để làm việc hiệu quả hơn và xây
									dựng giải pháp chất lượng.
								</p>
								<p>Với mình, lập trình không chỉ là công việc, mà còn là cách để biến ý tưởng thành sản phẩm thực tế, đơn giản, dễ dùng và hữu ích cho người khác.</p>
							</div>

							<div className='mt-8 grid grid-cols-1 gap-6'>
								<div className='flex items-start'>
									<div className='bg-green-100 p-3 rounded-full mr-4'>
										<FiCode className='text-green-600 text-xl' />
									</div>
									<div>
										<h4 className='font-bold text-gray-800 mb-1'>Kỹ năng chính</h4>
										<p className='text-gray-600'>Spring Boot, React, NodeJs</p>
									</div>
								</div>
							</div>

							<div className='mt-8 pt-6 border-t border-gray-200'>
								<div className='flex flex-col sm:flex-row gap-4'>
									<div className='flex items-center'>
										<FiMail className='text-green-600 mr-3 text-xl' />
										<div>
											<p className='text-sm text-gray-500'>Email</p>
											<a href='mailto:anhnt204.dev@gmail.com' className='text-gray-800 hover:text-green-600 transition-colors font-medium'>
												anhnt204.dev@gmail.com
											</a>
										</div>
									</div>

									<div className='flex items-center'>
										<FiPhone className='text-green-600 mr-3 text-xl' />
										<div>
											<p className='text-sm text-gray-500'>Điện thoại</p>
											<a href='tel:0123456789' className='text-gray-800 hover:text-green-600 transition-colors font-medium'>
												0389 801 058
											</a>
										</div>
									</div>
									<div className='flex items-center'>
										<FiMapPin className='text-green-600 mr-3 text-xl' />
										<div>
											<p className='text-sm text-gray-500'>Địa chỉ</p>
											<p className='text-gray-800 font-medium'>Trung văn, Nam Từ Liêm, Hà Nội</p>
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
