import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed cursor-pointer bottom-6  hover:bg-green-700 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg transition-opacity duration-300 ${
				isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
			aria-label='Scroll to top'>
			<FaArrowUp />
		</button>
	);
}
