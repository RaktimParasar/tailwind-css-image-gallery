module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			animation: {
				bounce: 'bounce 1s',
			},
			keyframes: {
				bounce: {
					'100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1) duration-700',
					},
					'0%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'duration-700',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
