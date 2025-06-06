import React from 'react';

const Contact = () => {
	return (
		<section id='contact' className='py-20 px-6 text-center bg-white'>
			<h2 className='text-3xl font-bold text-primary mb-6'>Liên hệ</h2>
			<p className='text-gray-700 mb-4'>
				Email:{' '}
				<a href='mailto:nguyenvana@example.com' className='text-green-700 underline'>
					nguyenvana@example.com
				</a>
			</p>
			<p className='text-gray-700'>SĐT: 0123 456 789</p>
		</section>
	);
};

export default Contact;
