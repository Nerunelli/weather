/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				lightGrey: '#eee',
			},
			backgroundImage: {
				night: "url('/public/images/night.png')",
				day: "url('/public/images/day.png')",
				sunrise: "url('/public/images/sunrise.png')",
				sunset: "url('/public/images/sunset.png')",
			},
			colors: {
				// transparent: 'transparent',
				lightBlue: '#09f',
				blue: '#149aff',
				grey: '#777',
				// green: '#7ddd31',
			},
			maxWidth: {
				// 128: '26rem',
			},
			width: {
				// 128: '26rem',
			},
			height: {
				// 128: '26rem',
			},
			fontFamily: {
				main: 'Arial, Helvetica, sans-serif',
			},
			fontSize: {
				// title: '17px',
				// subTitle: '13px',
				// large: '22px',
				// medium: '22px',
				// small: '22px',
			},
		},
	},
	plugins: [],
};
