module.exports = {
  theme: {
    extend: {
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
        grey: '#A9A9A9',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.625rem',
        full: '9999px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
