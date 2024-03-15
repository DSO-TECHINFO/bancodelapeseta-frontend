/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme:{
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1135px',
      'xl': '1440px',
    },
    extend: {
      screens: {
        'mobile': { 'min-width': '320px', 'max-width': '598px' },
        'tablet': { 'min-width': '599px', 'max-width': '1134px' },
        'laptop': { 'min-width': '1135px', 'max-width': '1439px' },
        'desktop': { 'min-width': '1440px', 'max-width': '3500px' },
      },
      colors: {
        primary: '#425cfd',
        'primary-dark': '#3b53e2',
        'primary-light':'#c7cbed',
        'primary-text':'#45435e',
        'background-gray':'#f0f0f7',
        'gray-icons':'#b9b9c7',
        'dark':'#282739'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};

