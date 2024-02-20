/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   pretendard: ['var(--font-pretendard)'],
      // },
      colors: {
        primary: {
          main: '#4C8BFF',
          strong: '#196AFF',
          light: '#E5EEFF',
        },
        secondary: {
          main: '#303030',
          strong: '#000000',
        },
        gray: '#A9A9A9',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
}
