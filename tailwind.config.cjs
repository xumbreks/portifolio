/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			backgroundImage: {
				insta:
					"linear-gradient(to bottom  right, #515bd4, #8134af, #dd2a7b, #feda77, #f58529  )",
			},
			fontFamily: {
				roboto: ["roboto", "sans-serif"],
				robotoSlab: ["roboto-slab", "sans-serif"],
			},
			colors: {
				tech: {
					html: "#ff571a",
					tailwind: "#38bdf8",
					javascript: "#F0DF3B",
					typescript: "#3178c6",
					react: "#149eca",
				},
			},
		},
	},
	plugins: [],
};
