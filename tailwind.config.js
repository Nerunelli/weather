/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				lightGrey: '#eee',
				lightBlue: '#a1d6ff',
			},
			backgroundImage: {
				// night: "url('/public/images/night.png')",
				// day: "url('/public/images/day.png')",
				// sunrise: "url('/public/images/sunrise.png')",
				// sunset: "url('/public/images/sunset.png')",
			},
			colors: {
				lightBlue: '#09f',
				grey: '#777',
			},
			fontFamily: {
				main: 'Arial, Helvetica, sans-serif',
			},
			fontSize: {
				small: '10px',
			},
		},
	},
	plugins: [],
};
