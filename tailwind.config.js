/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      poppins: ['Poppins'],
    },
    extend: {},
  },
  plugins: [],
}