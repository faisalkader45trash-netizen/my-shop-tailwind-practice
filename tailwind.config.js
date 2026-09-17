/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          success: '#00B207',
          dark: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};
