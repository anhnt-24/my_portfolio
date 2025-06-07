import React from 'react';

const projects = [
	{
		title: 'Quản lý công việc',
		desc: 'Ứng dụng quản lý công việc cá nhân với tính năng đầy đủ, xây dựng bằng React và Firebase cho phép đồng bộ dữ liệu thời gian thực.',
		link: 'https://github.com/username/todo-app',
		image: 'project1.jpg',
		tags: ['React', 'Firebase', 'Tailwind CSS'],
	},
	{
		title: 'Portfolio Website',
		desc: 'Trang portfolio cá nhân hiện đại với hiệu ứng mượt mà, tối ưu tốc độ tải và responsive trên mọi thiết bị.',
		link: 'https://github.com/username/portfolio',
		image: 'Avatar.jpg',
		tags: ['React', 'Tailwind CSS', 'Framer Motion'],
	},
];

const Projects = () => {
	return (
		<section id='projects' className='py-20 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>Dự Án Của Tôi</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>Những dự án tôi đã thực hiện với đam mê và sự sáng tạo</p>
				</div>

				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{projects.map((project, index) => (
						<div key={index} className='group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col'>
							<div className='relative overflow-hidden h-60'>
								<img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
								<div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent'></div>
							</div>

							<div className='p-6 flex-1 flex flex-col'>
								<div className='flex flex-wrap gap-2 mb-3'>
									{project.tags.map((tag, i) => (
										<span key={i} className='px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full'>
											{tag}
										</span>
									))}
								</div>

								<h3 className='text-2xl font-bold text-gray-900 mb-2'>{project.title}</h3>
								<p className='text-gray-600 mb-6 flex-1'>{project.desc}</p>

								<div className='flex justify-between items-center'>
									<a
										href={project.link}
										target='_blank'
										rel='noreferrer'
										className='inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg hover:from-green-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg'>
										Xem trên GitHub
										<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-2' viewBox='0 0 20 20' fill='currentColor'>
											<path
												fillRule='evenodd'
												d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
									</a>

									<span className='text-gray-400 text-sm'>
										<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 inline mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
										</svg>
										2023
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='text-center mt-16'>
					<a
						href='https://github.com/username'
						target='_blank'
						rel='noreferrer'
						className='inline-flex items-center px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300'>
						Xem tất cả dự án
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-2' viewBox='0 0 20 20' fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
