import { useState, useRef, useEffect } from 'react';

const navItems = [
	{ id: 'home', label: 'Trang chủ' },
	{ id: 'about', label: 'Giới thiệu' },
	{ id: 'skills', label: 'Kỹ năng' },
	{ id: 'projects', label: 'Dự án' },
	{ id: 'education', label: 'Học vấn' },
	{ id: 'contact', label: 'Liên hệ' },
];

const Header = () => {
	const [active, setActive] = useState('home');
	const [underlineStyle, setUnderlineStyle] = useState({});
	const navRefs = useRef({});

	useEffect(() => {
		const el = navRefs.current[active];
		if (el) {
			setUnderlineStyle({
				left: el.offsetLeft,
				width: el.offsetWidth,
			});
		}
	}, [active]);

	return (
		<header className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
			<div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16'>
				{/* Logo bên trái */}
				<div className='text-2xl font-bold text-green-700'>🌿 MyPortfolio</div>

				{/* Menu bên phải */}
				<nav className='relative flex space-x-6 text-green-800 font-medium'>
					{navItems.map(item => (
						<button
							key={item.id}
							ref={el => (navRefs.current[item.id] = el)}
							onClick={() => {
								setActive(item.id);
								const target = document.getElementById(item.id);
								if (target) {
									target.scrollIntoView({ behavior: 'smooth' });
								}
							}}
							className={`relative px-2 py-1 transition-colors hover:text-green-600 ${active === item.id ? 'text-green-700' : ''}`}>
							{item.label}
						</button>
					))}

					<span className='absolute bottom-0 h-[2px] bg-green-600 transition-all duration-300' style={underlineStyle} />
				</nav>
			</div>
		</header>
	);
};

export default Header;
