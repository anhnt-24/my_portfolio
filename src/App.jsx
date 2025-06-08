import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInWhenVisible from './components/FadeInWhenVisible';
import Education from './components/Education';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
	return (
		<div>
			<ScrollToTopButton />
			<Header />

			<FadeInWhenVisible>
				<Hero />
			</FadeInWhenVisible>

			<FadeInWhenVisible>
				<About />
			</FadeInWhenVisible>

			<FadeInWhenVisible>
				<Skills />
			</FadeInWhenVisible>

			<FadeInWhenVisible>
				<Education />
			</FadeInWhenVisible>

			<FadeInWhenVisible>
				<Projects />
			</FadeInWhenVisible>

			<FadeInWhenVisible>
				<Contact />
			</FadeInWhenVisible>
			<Footer />
		</div>
	);
}
