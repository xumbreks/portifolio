/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoSlab: ["roboto-slab", "sans-serif"],
      },
      colors: {
        color: {
          900: "#000000",
          800: "#001F3F",
          700: "#36454F",
          600: "#FFD700",
          500: "#FFFAF0",
          400: "#FFFFFF",
        },
      },
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
      },
    },
  },
  plugins: [],
};
