/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enabling class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#002E5D', // Dark Blue / Navy
          MAIN: '#004A99',
          500: '#1A73E8',
        },
        accent: {
          MAIN: '#D4AF37', // Gold 
          LIGHT: '#F3E5AB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
