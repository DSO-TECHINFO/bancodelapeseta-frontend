/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '599px',
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
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};

