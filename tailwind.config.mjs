import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: {
					start: '#FF1E10',
					end: '#FB6F66',
					DEFAULT: '#FF1E10',
				},
				orange: {
					start: '#FF7410',
					end: '#FBA86C',
					DEFAULT: '#FF7410',
				},
				yellow: {
					start: '#FFB800',
					end: '#FBD166',
					DEFAULT: '#FFB800',
				},
				green: {
					start: '#039C00',
					end: '#5EBE5D',
					DEFAULT: '#039C00',
				},
				cyan: {
					start: '#7F94FF',
					end: '#B0BCFB',
					DEFAULT: '#7F94FF',
				},
				blue: {
					start: '#1070FF',
					end: '#66A2FB',
					DEFAULT: '#1070FF',
				},
				purple: {
					start: '#8810FF',
					end: '#B56FFB',
					DEFAULT: '#8810FF',
				},
				gray: {
					DEFAULT: '#333333'
				},
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-5deg)' },
					'50%': { transform: 'rotate(5deg)' },
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			backgroundSize: {
				'no-underline-size': '0 1px, auto',
				'underline-size': '100% 1px, auto',
			},
			backgroundImage: {
				'underline': 'linear-gradient(CurrentColor, CurrentColor), linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'
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
						},
						{
							'blockquote p:first-of-type::before': {
								content: 'none'
							},
						},
						{
							'blockquote p:last-of-type::after': {
								content: 'none'
							},
						},
						{
							'code::before': {
								content: 'none'
							},
						},
						{
							'code::after': {
								content: 'none'
							},
						}
					]
				}
			},
			transitionTimingFunction: {
				'curve-in': 'cubic-bezier(.08,.82,.2,1)',
				'curve-out': 'cubic-bezier(.95,.05,.8,.04)'
			},
			boxShadow: {
				'dark': '0 4px 4px 0 rgb(0 0 0 / 0.25)',
			}
		},
		fontFamily: {
			sans: ['PingFang', ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
