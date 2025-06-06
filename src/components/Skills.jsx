import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiPostman } from 'react-icons/si';

const skills = [
	{ name: 'HTML', icon: <FaHtml5 size={40} className='text-orange-600' /> },
	{ name: 'CSS', icon: <FaCss3Alt size={40} className='text-blue-600' /> },
	{ name: 'JavaScript', icon: <FaJs size={40} className='text-yellow-500' /> },
	{ name: 'React', icon: <FaReact size={40} className='text-cyan-500' /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className='text-sky-400' /> },
	{ name: 'Git', icon: <FaGitAlt size={40} className='text-red-600' /> },
	{ name: 'Node.js', icon: <FaNodeJs size={40} className='text-green-600' /> },
	{ name: 'REST API', icon: <SiPostman size={40} className='text-orange-500' /> },
];

const Skills = () => {
	return (
		<section id='skills' className='py-20 px-6 bg-white'>
			<h2 className='text-3xl font-bold text-primary text-center mb-10'>Kỹ năng</h2>
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto'>
				{skills.map((skill, i) => (
					<div key={i} className='flex flex-col items-center justify-center bg-green-100 text-green-800 py-6 px-4 rounded-xl shadow hover:shadow-lg transition duration-300'>
						{skill.icon}
						<p className='mt-3 text-lg font-semibold'>{skill.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
