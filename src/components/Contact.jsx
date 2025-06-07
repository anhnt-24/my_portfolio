import React from 'react';

const Contact = () => {
	return (
		<section id='contact' className='py-20 px-4 sm:px-6 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-primary text-center mb-4'>Liên Hệ</h2>
				<p className='text-gray-600 text-center max-w-2xl mx-auto mb-12'>Bạn có câu hỏi hay cần hỗ trợ? Hãy điền thông tin bên dưới, chúng tôi sẽ phản hồi sớm nhất!</p>

				<div className='bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
					{/* Phần hình ảnh */}
					<div className='hidden lg:block relative h-full min-h-[400px]'>
						<img src='Avatar.jpg' alt='Contact' className='w-full h-full object-cover absolute inset-0' />
						<div className='absolute inset-0 bg-gradient-to-t from-green-800/20 to-blue-800/20'></div>
						<div className='absolute bottom-8 left-8 text-white'>
							<h3 className='text-2xl font-bold mb-2'>Kết nối với chúng tôi</h3>
							<p className='mb-4'>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
							<div className='flex space-x-4'>
								<a href='#' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
								<a href='#' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
										<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
									</svg>
								</a>
								<a href='#' className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition'>
									<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Phần form */}
					<div className='p-8 md:p-12'>
						<form className='space-y-6'>
							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Họ tên *</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
											<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
										</svg>
									</div>
									<input
										type='text'
										placeholder='Nguyễn Văn A'
										className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
										required
									/>
								</div>
							</div>

							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Email *</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
											<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
											<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
										</svg>
									</div>
									<input
										type='email'
										placeholder='email@example.com'
										className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
										required
									/>
								</div>
							</div>

							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Số điện thoại</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
											<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
										</svg>
									</div>
									<input
										type='tel'
										placeholder='0987 654 321'
										className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
									/>
								</div>
							</div>

							<div className='space-y-1'>
								<label className='block text-sm font-medium text-gray-700'>Nội dung *</label>
								<textarea
									rows={4}
									placeholder='Xin chào, tôi muốn hỏi về...'
									className='block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none'
									required></textarea>
							</div>

							<div className='flex items-center'>
								<input id='agree-terms' name='agree-terms' type='checkbox' className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded' required />
								<label htmlFor='agree-terms' className='ml-2 block text-sm text-gray-700'>
									Tôi đồng ý với{' '}
									<a href='#' className='text-green-600 hover:text-green-800'>
										điều khoản
									</a>{' '}
									và{' '}
									<a href='#' className='text-green-600 hover:text-green-800'>
										chính sách bảo mật
									</a>
								</label>
							</div>

							<button
								type='submit'
								className='w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg'>
								Gửi liên hệ
								<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline ml-2' viewBox='0 0 20 20' fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
