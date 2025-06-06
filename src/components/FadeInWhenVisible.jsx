import { motion } from 'framer-motion';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
	return (
		<motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }}>
			{children}
		</motion.div>
	);
};

export default FadeInWhenVisible;
