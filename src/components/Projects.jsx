import React from 'react';

const projects = [
	{
		title: 'Quản lý công việc',
		desc: 'Ứng dụng quản lý công việc cá nhân sử dụng React và Firebase.',
		link: 'https://github.com/username/todo-app',
		image: 'Avatar.jpg',
	},
	{
		title: 'Portfolio Website',
		desc: 'Trang portfolio cá nhân hiện tại, sử dụng React + Tailwind.',
		link: 'https://github.com/username/portfolio',
		image: 'Avatar.jpg',
	},
];

const Projects = () => {
	return (
		<section id='projects' className='py-20 px-6 bg-green-50'>
			<h2 className='text-3xl font-bold text-primary text-center mb-10'>Dự án</h2>

			<div className='grid gap-8 max-w-4xl mx-auto sm:grid-cols-2'>
				{projects.map((p, i) => (
					<div key={i} className='bg-white rounded-xl shadow-md overflow-hidden border border-green-200 flex flex-col'>
						<img src={p.image} alt={p.title} className='w-full h-48 object-cover' />
						<div className='p-6 flex-1 flex flex-col'>
							<h3 className='text-xl font-semibold text-green-700 mb-2'>{p.title}</h3>
							<p className='text-gray-700 mb-4 flex-1'>{p.desc}</p>
							<a href={p.link} target='_blank' rel='noreferrer' className='group inline-flex items-center w-fit bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300'>
								Xem GitHub
								<span className='ml-2 transform transition-transform duration-300 group-hover:translate-x-1'>→</span>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
