/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto : ['roboto', 'sans-serif']
      },
      animation: {
        'pulse-slow' : 'pulse 10s linear infinite'
      }
    },
  },
  plugins: [],
}
