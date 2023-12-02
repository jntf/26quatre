/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: {
			  DEFAULT: '#7EAF61',
			  50: '#E2EDDB',
			  100: '#D6E6CD',
			  200: '#C0D8B2',
			  300: '#AACA97',
			  400: '#94BD7C',
			  500: '#7EAF61',
			  600: '#638F49',
			  700: '#496A36',
			  800: '#2F4523',
			  900: '#162010',
			  950: '#090D07'
			},
			// primary: {
			//   DEFAULT: '#8B9BA6',
			//   50: '#F3F5F6',
			//   100: '#E7EBED',
			//   200: '#D0D7DB',
			//   300: '#B9C3C9',
			//   400: '#A2AFB8',
			//   500: '#8B9BA6',
			//   600: '#6C7F8D',
			//   700: '#54636D',
			//   800: '#3B464D',
			//   900: '#23292E',
			//   950: '#171B1E'
			// },
			complementary: {
			  DEFAULT: '#393146',
			  50: '#9385AA',
			  100: '#8879A1',
			  200: '#74638E',
			  300: '#605376',
			  400: '#4D425E',
			  500: '#393146',
			  600: '#1E1A25',
			  700: '#030304',
			  800: '#000000',
			  900: '#000000',
			  950: '#000000'
			},
			gold: {
			  DEFAULT: '#A3A08A',
			  50: '#F4F3F1',
			  100: '#EBEAE5',
			  200: '#D9D8CF',
			  300: '#C7C5B8',
			  400: '#B5B3A1',
			  500: '#A3A08A',
			  600: '#89866C',
			  700: '#6A6753',
			  800: '#4A483A',
			  900: '#2B2A22',
			  950: '#1B1A15'
			},
			como: {
			  DEFAULT: '#538F75',
			  50: '#BFDACF',
			  100: '#B3D3C5',
			  200: '#99C4B1',
			  300: '#7FB59D',
			  400: '#65A68A',
			  500: '#538F75',
			  600: '#3E6C58',
			  700: '#2A483B',
			  800: '#15251E',
			  900: '#010101',
			  950: '#000000'
			},
		  },
		  keyframes: {
			slideInLeft: {
			  '0%': { transform: 'translateX(-100%)', opacity: '0' },
			  '100%': { transform: 'translateX(0)', opacity: '1' },
			},
			slideInRight: {
			  '0%': { transform: 'translateX(100%)', opacity: '0' },
			  '100%': { transform: 'translateX(0)', opacity: '1' },
			},
			fall: {
			  '0%': { transform: 'translateY(-100%)', opacity: '0' },
			  '60%': { transform: 'translateY(0)', opacity: '1' },
			  '80%': { transform: 'translateY(-10px)' },
			  '100%': { transform: 'translateY(0)' },
			},
			dropIn: {
			  '0%': { transform: 'translateY(-100vh) scale(2)', opacity: '0' },
			  '50%': { transform: 'translateY(0) scale(1.1)', opacity: '1' },
			  '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
			},
		  },
		  animation: {
			'slide-in-left': 'slideInLeft 1s ease-out forwards',
			'slide-in-right': 'slideInRight 1s ease-out forwards',
			'fall': 'fall 1s ease-out forwards',
			'drop-in': 'dropIn 1s ease-out forwards',
		  },
		},
	  },
	plugins: [],
}
