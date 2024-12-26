/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors : {
			'ic-orange' : '#FF8800',
			'ic-black' : '#1E1E1E',
			'ic-white' : '#d6d3d1',
			'ic-gray' : '#d6d3d1',
			'ic-message' :'#374151',
			'ic-blackorange' : '#7c2d12',
			'ic-disabled' : '#1f2937'
		},
		screens : {
			'phone' : '250px',
			'tablet' : '640px',
			'laptop' : '1024px'
		},
		fontFamily : {
			'Kanit' : ['Kanit', 'Serif']
		}
	},
	plugins: [],
}