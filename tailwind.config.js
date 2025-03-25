/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D47A1",
        secondary: "#1976D2",
        accent: "#64B5F6",
        dark: "#0A1929",
        light: "#F5F5F5",
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 