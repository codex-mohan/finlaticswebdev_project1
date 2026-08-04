/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./sections/**/*.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        ink: "#07110f",
        paper: "#f1f0e9",
        mint: "#a8ff60",
        orange: "#ff7549",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
