/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gap: {
        '129': '250px',
        '130': '600px',
      },
    },
    fontFamily: {
      'cookie': ['Cookie', 'ui-sans-serif', 'system-ui'],
      'milonga': ['Milonga', 'ui-sans-serif', 'system-ui'],
      'tenor': ['Tenor Sans', 'ui-sans-serif', 'system-ui'],
      
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'),],
}