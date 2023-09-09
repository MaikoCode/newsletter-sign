/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pale-navy": "#36384D",
      "white": "#FFFFFF",
      "black": "#151515",
      "dark-navy": "#242742"
    },
    fontFamily: {
      "primary": ["Roboto", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

