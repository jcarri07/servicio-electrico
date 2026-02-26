/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-yellow': '#FFD700',
        'matte-black': '#121212',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
