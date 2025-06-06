import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const About = () => {
	return (
		<section id='about' className='py-20 bg-green-50 px-6'>
			<h2 className='text-3xl font-bold text-primary text-center mb-10'>Giới thiệu</h2>

			<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10'>
				{/* Avatar bên trái */}
				<div className='w-full md:w-1/3 flex justify-center'>
					<div className='bg-white p-4 rounded-2xl shadow-xl'>
						<img src='/Avatar.jpg' alt='Avatar' className='w-64 h-auto object-cover rounded-xl shadow-md' />
					</div>
				</div>

				{/* Nội dung bên phải */}
				<div className='w-full md:w-2/3'>
					<p className='text-gray-700 text-lg text-justify mb-6'>
						Tôi là lập trình viên Frontend với hơn 3 năm kinh nghiệm làm việc với React, Tailwind CSS và các công nghệ web hiện đại. Tôi thích xây dựng những giao diện đẹp, tối ưu trải nghiệm người
						dùng và luôn sẵn sàng học hỏi những điều mới.
					</p>

					<div className='flex items-center gap-3 text-gray-700 text-lg mb-2'>
						<FiMail className='text-primary' />
						<span>
							Email:{' '}
							<a href='mailto:nguyenvana@example.com' className='text-blue-600 hover:underline'>
								nguyenvana@example.com
							</a>
						</span>
					</div>

					<div className='flex items-center gap-3 text-gray-700 text-lg'>
						<FiPhone className='text-primary' />
						<span>
							Điện thoại:{' '}
							<a href='tel:0123456789' className='text-blue-600 hover:underline'>
								0123 456 789
							</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
