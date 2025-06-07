const Education = () => {
	return (
		<section id='education' className='py-20 bg-white px-6'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold text-primary mb-16 text-center'>
					<span className='relative inline-block'>
						<span className='relative z-10'>Học vấn & Giải thưởng</span>
						<span className='absolute bottom-1 left-0 w-full h-3 bg-green-100 opacity-70 -z-0'></span>
					</span>
				</h2>

				{/* Education Section */}
				<div className='mb-20'>
					<h3 className='text-2xl font-semibold text-gray-800 mb-8 pl-4 border-l-4 border-green-500'>Học vấn</h3>

					<div className='bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-8 items-center'>
						<div className='w-full md:w-1/4 flex justify-center'>
							<div className='relative w-48 h-48 rounded-full bg-white shadow-md overflow-hidden border-4 border-green-100'>
								<img src='/HVCNBC.png' alt='BK' className='w-full h-full object-contain p-4' />
							</div>
						</div>
						<div className='w-full md:w-3/4'>
							<h3 className='text-2xl font-bold text-green-800 mb-2'>Đại học Bách Khoa TP.HCM</h3>
							<p className='text-gray-600 font-medium mb-4'>Cử nhân Khoa học Máy tính • 2018 – 2022</p>
							<p className='text-gray-700 leading-relaxed'>
								Tốt nghiệp loại <span className='font-semibold text-green-700'>Giỏi</span>, GPA <span className='font-semibold'>3.6/4.0</span>. Tham gia các dự án lập trình Web và nghiên cứu trí tuệ
								nhân tạo. Đồ án tốt nghiệp đạt điểm xuất sắc về ứng dụng AI trong phân tích dữ liệu y tế.
							</p>
						</div>
					</div>
				</div>

				{/* Awards Section */}
				<div>
					<h3 className='text-2xl font-semibold text-gray-800 mb-8 pl-4 border-l-4 border-green-500'>Giải thưởng</h3>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{/* Award 1 */}
						<div className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200'>
							<div className='relative h-68 overflow-hidden'>
								<img src='/HVCNBC.png' alt='Giải Nhất Hackathon' className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<span className='absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full'>Giải Nhất</span>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold text-gray-800 mb-2'>Hackathon FPT Software 2023</h4>
								<p className='text-green-600 text-sm font-medium mb-3'>Tháng 6/2023</p>
								<p className='text-gray-600 leading-relaxed'>
									Xây dựng ứng dụng React hỗ trợ quản lý học tập, chiến thắng sau 36 giờ coding liên tục. Giải pháp được đánh giá cao về tính sáng tạo và khả năng ứng dụng thực tế.
								</p>
							</div>
						</div>

						{/* Award 2 */}
						<div className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200'>
							<div className='relative h-68 overflow-hidden'>
								<img src='/Avatar.jpg' alt='Sinh viên xuất sắc' className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<span className='absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full'>Danh hiệu</span>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold text-gray-800 mb-2'>Sinh viên xuất sắc 2022</h4>
								<p className='text-green-600 text-sm font-medium mb-3'>Đại học Bách Khoa TP.HCM</p>
								<p className='text-gray-600 leading-relaxed'>
									Vinh danh nhờ thành tích học tập xuất sắc (top 5% khoa CNTT) và đóng góp trong hoạt động nghiên cứu khoa học. Xuất bản 2 bài báo tại hội thảo khoa học cấp trường.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
