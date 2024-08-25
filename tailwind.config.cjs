/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        insta:
          "linear-gradient(to bottom  right, #515bd4, #8134af, #dd2a7b, #feda77, #f58529  )",
      },
      backgroundSize: {
        "200-200": "200% 200%",
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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        scroll: "scroll 5s linear infinite",
        gradient: "gradient 5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
