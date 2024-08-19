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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
