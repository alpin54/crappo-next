// -- animation
const animation = {
	slideUp: {
		initial: {
			y: "50%",
			opacity: 0,
		},
		whileInView: {
			y: "0",
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
};

export default animation;
