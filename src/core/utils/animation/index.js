// -- animation
const animation = {
	slideUp: {
		initial: {
			y: "20%",
			opacity: 0,
		},
		whileInView: {
			y: 0,
			opacity: 1,
		},
		transition: (delay = 0) => {
			return {
				type: "spring",
				duration: 2,
				delay: delay,
			};
		},
		viewport: { once: true },
	},
	fadeIn: {
		initial: {
			y: 80,
			opacity: 0,
		},
		enter: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 1.8 },
		},
	},
	slideIn: {
		initial: {
			y: 16,
			opacity: 0,
		},
		enter: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.8, delay: 0.05 },
		},
		exit: {
			opacity: 0,
			transition: { delay: 0.09 },
		},
	},
	slideOut: {
		initial: {
			top: 0,
		},
		exit: {
			top: "-100vh",
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
		},
	},
};

export default animation;
