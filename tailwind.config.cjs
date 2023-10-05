/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
	  fontSize: {
		sm: '0.6rem',
		base: '0.8rem',
		xl: '1rem',
		'2xl': '1.25rem',
		'3xl': '1.563rem',
		'4xl': '1.953rem',
		'5xl': '2.441rem',
		'6xl': '3.052rem',
	  }
	}
}
