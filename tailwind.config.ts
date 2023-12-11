import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					darkest: '#242F66',
					dark: '#505985',
					medium: '#7C82A3',
					light: '#A7ACC2',
					lightest: '#D3D5e0',
				},
				grayscale: {
					black: '#000000',
					dark: '#505050',
					medium: '#767676',
					light: '#c5c5c5',
					white: '#FFFFFF',
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
