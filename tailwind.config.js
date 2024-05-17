/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1536px',
       
      },

    },
  },
  plugins: [],
};
