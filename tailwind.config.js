/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: false,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'aqua': '#17DCBF',
        'vivid-blue': '#425CFF',
        'sky-blue': '#2E98E0',
        'light-teal': '#4fd1c5',
        'hover-teal': '#5fe3d1',
      },
    },
  },
  plugins: [],
};