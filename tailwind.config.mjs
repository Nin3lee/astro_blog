/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-5deg)' },
					'50%': { transform: 'rotate(5deg)' },
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			typography: {
				DEFAULT: {
					css: [
						{
							maxWidth: '62.5rem',
						},
						{
							h1: {
								fontWeight: '800'
							},
						}
					]
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
