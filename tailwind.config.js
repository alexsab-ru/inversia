const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./index.html', './src/js/**/*.js'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1.25rem',
		},
		screens: {
			'sm': '587px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1180px',
		},
		colors: {
			blue: {
				300: '#C7E8FF',
				400: '#87c1eb',
				500: '#247CB8',
			},
			orange: {
				300: '#ffdbc7',
				400: '#ebaa87',
				500: '#b85824',
			},
			gray: {
				100: '#F7F7F8',
				300: '#68676B',
				500: '#80868e',
			},
			white: colors.white,
			black: colors.black,
			red: colors.red,
			transparent: 'transparent',
		},
		extend: {
			fontFamily: {
				sans: ['i-roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
	],
}
