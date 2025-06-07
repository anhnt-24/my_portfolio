import React, { useEffect, useMemo, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = ({
	backgroundColor = '#ffffff',
	particleColor = '#000',
	linkColor = '#000',
	linkWidth = 2, // Thêm prop này để điều chỉnh độ dày đường kết nối
	particleCount = 80,
	particleSize = { min: 2, max: 5 }, // Thêm prop này để điều chỉnh kích thước hạt
}) => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async container => {
		console.log('Particles container loaded', container);
	};

	const options = useMemo(
		() => ({
			fullScreen: {
				enable: false,
			},
			background: {
				color: {
					value: '#fcfcfc',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.8,
					},
				},
			},
			particles: {
				color: {
					value: '#000',
				},
				links: {
					color: '#000',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce',
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);
	if (!init) return null;

	return (
		<Particles
			id='particles-background'
			particlesLoaded={particlesLoaded}
			options={options}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: '100%',
				height: '100%',
			}}
		/>
	);
};

export default ParticlesBackground;
