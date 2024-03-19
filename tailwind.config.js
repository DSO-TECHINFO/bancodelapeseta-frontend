/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme:{
    extend: {
      colors: {
        primary: '#425cfd',
        'primary-dark': '#3b53e2',
        'primary-light': '#c7cbed',
        'primary-text': '#45435e',
        'background-gray': '#f0f0f7',
        'gray-icons': '#b9b9c7',
        'dark': '#282739',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/forms')
    , require('@tailwindcss/typography')
  ],
};

