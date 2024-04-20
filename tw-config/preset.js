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
        none: '0px',
        sm: '2px',
        md: '6px',
        lg: '10px',
        full: '9999px',
      },
      zIndex: {
        deep: '-1',
        base: '1',
        popover: '100',
        sticky: '200',
        overlay: '300',
        dialog: '400',
        notification: '500',
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
