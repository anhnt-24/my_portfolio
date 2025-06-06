const Education = () => {
	return (
		<section id='education' className='py-20 bg-white px-6 text-center'>
			<h2 className='text-3xl font-bold text-primary mb-10'>Học vấn & Giải thưởng</h2>

			{/* Học vấn */}
			<div className='max-w-4xl mx-auto space-y-10 text-left mb-12'>
				<div className='bg-green-50 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6'>
					<img src='/Avatar.jpg' alt='BK' className='w-48 h-48 object-cover rounded-md shadow' />
					<div>
						<h3 className='text-xl font-semibold text-green-700'>Đại học Bách Khoa TP.HCM</h3>
						<p className='text-gray-600'>Cử nhân Khoa học Máy tính • 2018 – 2022</p>
						<p className='mt-2 text-gray-700'>Tốt nghiệp loại Giỏi, GPA 3.6/4.0. Tham gia các dự án lập trình Web và nghiên cứu trí tuệ nhân tạo.</p>
					</div>
				</div>
			</div>

			{/* Giải thưởng */}
			<div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Thẻ 1 */}
				<div className='bg-green-50 p-4 rounded-xl shadow-md'>
					<img src='/Avatar.jpg' alt='Giải Nhất Hackathon' className='w-full h-48 object-cover rounded-md mb-4' />
					<div className='text-left'>
						<h4 className='text-lg font-semibold text-green-700'>Giải Nhất Hackathon 2023</h4>
						<p className='text-gray-600 text-sm'>Tổ chức bởi FPT Software</p>
						<p className='mt-2 text-gray-700 text-sm text-justify'>Xây dựng ứng dụng React hỗ trợ quản lý học tập, chiến thắng sau 36 giờ coding liên tục.</p>
					</div>
				</div>

				{/* Thẻ 2 */}
				<div className='bg-green-50 p-4 rounded-xl shadow-md'>
					<img src='/Avatar.jpg' alt='Sinh viên xuất sắc' className='w-full h-48 object-cover rounded-md mb-4' />
					<div className='text-left'>
						<h4 className='text-lg font-semibold text-green-700'>Sinh viên xuất sắc 2022</h4>
						<p className='text-gray-600 text-sm'>Đại học Bách Khoa TP.HCM</p>
						<p className='mt-2 text-gray-700 text-sm text-justify'>Vinh danh nhờ thành tích học tập xuất sắc và đóng góp trong hoạt động nghiên cứu khoa học.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
