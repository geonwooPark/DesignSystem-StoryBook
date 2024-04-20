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
      keyframes: {
        slideFadeIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideFadeOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideFadeIn: 'slideFadeIn 0.2s ease',
        slideFadeOut: 'slideFadeOut 0.2s ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
