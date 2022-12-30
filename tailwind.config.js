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
			'xl': '1280px',
			'2xl': '1480px',
		},
		colors: {},
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
