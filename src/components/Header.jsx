import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [underlineStyle, setUnderlineStyle] = useState({});
	const navRefs = useRef({});

	useEffect(() => {
		const handleResize = () => {
			const el = navRefs.current[active];
			if (el) {
				setUnderlineStyle({
					left: el.offsetLeft,
					width: el.offsetWidth,
				});
			}
			if (window.innerWidth > 768) {
				setIsMenuOpen(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [active, isMenuOpen]);

	const handleNavClick = itemId => {
		setActive(itemId);
		setIsMenuOpen(false);
		const target = document.getElementById(itemId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16'>
				<div className='text-2xl font-bold text-gray-600 flex items-center gap-2'>
					<img src='/icon.jpg' className='h-12 w-12 rounded-full'></img> MyPortfolio
				</div>

				<nav className='hidden md:flex relative space-x-6 text-gray-600 font-medium'>
					{navItems.map(item => (
						<button
							key={item.id}
							ref={el => (navRefs.current[item.id] = el)}
							onClick={() => handleNavClick(item.id)}
							className={`relative px-2 py-1 transition-colors hover:text-green-500 cursor-pointer ${active === item.id ? 'text-green-600' : ''}`}>
							{item.label}
						</button>
					))}
					<span className='absolute bottom-0 h-[2px] bg-green-600 transition-all duration-300' style={underlineStyle} />
				</nav>

				<button className='md:hidden text-gray-600 focus:outline-none' onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
				</button>

				{isMenuOpen && (
					<div className='absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden'>
						<div className='flex flex-col space-y-2 px-4 py-3'>
							{navItems.map(item => (
								<button
									key={item.id}
									onClick={() => handleNavClick(item.id)}
									className={`px-4 py-2 text-left rounded-md transition-colors ${active === item.id ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
