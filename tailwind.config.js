/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(0, 174, 239)',
        'secondary': 'rgb(232, 232, 232)',
        'main-black':'#3A3A3A',
        'secondary-black': '#4A4A4A'
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    }
  },
  plugins: [],
}

