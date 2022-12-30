const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1172px',
			'2xl': '1172px',
		},
		colors: {
			accent: '#247CB8',
			blue: {
				300: '#C7E8FF',
			},
			gray: {
				300: '#68676B',
			},
			white: colors.white,
			black: colors.black,
		},
		extend: {
			fontFamily: {
				sans: ['i-roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		//require('@tailwindcss/line-clamp'),
		//require('@tailwindcss/forms'),
	],
}
