const Awards = () => {
	return (
		<section id='awards' className='py-20 bg-green-50 px-6 text-center'>
			<h2 className='text-3xl font-bold text-primary mb-10'>Giải thưởng</h2>

			<div className='max-w-4xl mx-auto space-y-10 text-left'>
				{/* Giải thưởng 1 */}
				<div className='bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6'>
					<img src='https://source.unsplash.com/100x100/?trophy' alt='Trophy' className='w-24 h-24 object-cover rounded-md shadow' />
					<div>
						<h3 className='text-xl font-semibold text-green-700'>Giải Nhất Hackathon 2023</h3>
						<p className='text-gray-600'>Tổ chức bởi FPT Software</p>
						<p className='mt-2 text-gray-700'>Dẫn dắt nhóm xây dựng ứng dụng React hỗ trợ quản lý thời gian học tập, chiến thắng trong 36 giờ coding liên tục.</p>
					</div>
				</div>

				{/* Giải thưởng 2 */}
				<div className='bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6'>
					<img src='https://source.unsplash.com/100x100/?award' alt='Award' className='w-24 h-24 object-cover rounded-md shadow' />
					<div>
						<h3 className='text-xl font-semibold text-green-700'>Sinh viên xuất sắc năm 2022</h3>
						<p className='text-gray-600'>Đại học Bách Khoa TP.HCM</p>
						<p className='mt-2 text-gray-700'>Được vinh danh vì thành tích học tập xuất sắc và đóng góp tích cực trong các hoạt động nghiên cứu khoa học.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Awards;
