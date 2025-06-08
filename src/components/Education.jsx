const Education = () => {
	return (
		<section id='education' className='py-20  px-6 '>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold  mb-16 text-center'>
					<span className='relative inline-block'>
						<span className='relative z-10'>Học vấn & Giải thưởng</span>
					</span>
				</h2>

				{/* Education Section */}
				<div className='mb-20'>
					<h3 className='text-2xl font-semibold text-gray-800 mb-8 pl-4 border-l-4 border-green-600'>Học vấn</h3>

					<div className='p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-8 items-center'>
						<div className='w-full md:w-1/4 flex justify-center'>
							<div className='relative w-48 h-48 rounded-full bg-white shadow-md overflow-hidden border-4 border-green-100'>
								<img src='/HVCNBC.png' alt='HVCNBCVT' className='w-full h-full object-contain p-4' />
							</div>
						</div>
						<div className='w-full md:w-3/4'>
							<h3 className='text-2xl font-bold text-green-600 mb-2'>Học viện Công nghệ Bưu chính Viễn thông</h3>
							<p className='text-gray-600 font-medium mb-4'>Ngành Khoa học Máy tính • 2022 – nay</p>
							<p className='text-gray-700 leading-relaxed'>
								Sinh viên năm 3 yêu thích lập trình web và phát triển phần mềm. Mình tập trung học hỏi các công nghệ như React, NodeJs, Spring Boot để xây dựng những ứng dụng hiệu quả, dễ dùng và dễ
								mở rộng.
							</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className='text-2xl font-semibold text-gray-800 mb-8 pl-4 border-l-4 border-green-600'>Giải thưởng</h3>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200'>
							<div className='relative h-68 overflow-hidden'>
								<img src='/Giaiba.png' alt='Giải Ba AI Contest PTIT 2024' className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<span className='absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
									<span>🥉</span> Giải Ba{' '}
								</span>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold text-gray-800 mb-2'>AI Contest PTIT 2024</h4>
								<p className='text-green-600 text-sm font-medium mb-3'>Tháng 10/2024</p>
								<p className='text-gray-600 leading-relaxed'>
									Phát triển trò chơi “AI Tetris Battle” – nơi người chơi không trực tiếp thi đấu, mà sẽ huấn luyện AI đại diện cho mình. Các AI sau đó được đưa vào đấu trường Tetris theo kiểu đối
									kháng, cạnh tranh với AI của người chơi khác. Ý tưởng sáng tạo, kết hợp giữa game chiến thuật và học tăng cường (Reinforcement Learning), giúp người chơi trở thành “HLV AI”.
								</p>
							</div>
						</div>

						{/* Award 2 */}
						<div className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200'>
							<div className='relative h-68 overflow-hidden'>
								<img src='/Scholarship.png' alt='Sinh viên xuất sắc' className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<span className='absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full'>🎓 Danh hiệu</span>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold text-gray-800 mb-2'>Học bổng KKHT</h4>
								<p className='text-green-600 text-sm font-medium mb-3'>Học viện Công nghệ Bưu chính Viễn thông</p>
								<p className='text-gray-600 leading-relaxed'>
									Được trao học bổng khuyến khích học tập loại giỏi trong 2 kì liên tiếp nhờ thành tích học tập tốt. Đây là sự ghi nhận xứng đáng cho quá trình học tập nghiêm túc và tinh thần cầu
									tiến.
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
