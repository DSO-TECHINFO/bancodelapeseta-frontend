/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme:{
    extend: {
      colors: {
        primary: {
          DEFAULT: '#425cfd',
          dark: '#3b53e2',
          light: '#c7cbed',
          text: '#45435e',
        },
        'background-gray': '#f0f0f7',
        'gray-icons': '#b9b9c7',
        'dark': '#282739',
        green: {
          DEFAULT: 'hsl(129 78% 52%)',
        },
        yellow: {
          DEFAULT: 'hsl(44.4 87% 63%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/forms')
    , require('@tailwindcss/typography')
  ],
};

