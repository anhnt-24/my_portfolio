import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiTypescript, SiNextdotjs, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
	{ name: 'HTML5', icon: <FaHtml5 className='w-full h-full' />, color: 'text-orange-600' },
	{ name: 'CSS3', icon: <FaCss3Alt className='w-full h-full' />, color: 'text-blue-600' },
	{ name: 'JavaScript', icon: <FaJs className='w-full h-full' />, color: 'text-yellow-500' },
	{ name: 'TypeScript', icon: <SiTypescript className='w-full h-full' />, color: 'text-blue-600' },
	{ name: 'React', icon: <FaReact className='w-full h-full' />, color: 'text-cyan-500' },
	{ name: 'Next.js', icon: <SiNextdotjs className='w-full h-full' />, color: 'text-gray-800' },
	{ name: 'Redux', icon: <SiRedux className='w-full h-full' />, color: 'text-purple-500' },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss className='w-full h-full' />, color: 'text-sky-400' },
	{ name: 'Git', icon: <FaGitAlt className='w-full h-full' />, color: 'text-red-600' },
	{ name: 'Node.js', icon: <FaNodeJs className='w-full h-full' />, color: 'text-green-600' },
	{ name: 'REST API', icon: <SiPostman className='w-full h-full' />, color: 'text-orange-500' },
];

const Skills = () => {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<section id='skills' className='py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>Kỹ Năng Công Nghệ</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>Những công nghệ và công cụ tôi thành thạo và thường xuyên sử dụng</p>
				</div>

				<motion.div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8' variants={container} initial='hidden' whileInView='visible' viewport={{ once: true }}>
					{skills.map((skill, i) => (
						<motion.div key={i} className='group flex flex-col items-center' variants={item} whileHover={{ y: -5 }}>
							<div className={`relative w-24 h-24 mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center p-5 group-hover:shadow-xl transition-all duration-300 ${skill.color}`}>
								{skill.icon}
								<div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500 transition-all duration-300'></div>
							</div>
							<h3 className='text-lg font-medium text-gray-800 group-hover:text-green-600 transition-colors'>{skill.name}</h3>
							<div className='mt-2 w-8 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></div>
						</motion.div>
					))}
				</motion.div>

				<div className='mt-16 flex justify-center'>
					<div className='relative group'>
						<div className='absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200'></div>
						<button className='relative px-8 py-3 bg-white ring-1 ring-gray-200 rounded-lg leading-none flex items-center'>
							<span className='text-gray-900 font-medium'>Xem thêm kỹ năng</span>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-2 text-gray-500' viewBox='0 0 20 20' fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
