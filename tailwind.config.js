const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      height: {
        '30': '30vh',
        '35': '35vh',
      },
      minHeight: {
        '30': '30vh',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      gridTemplateRows: {
        'mobile': '35vh 1fr 35vh',
        'desktop': '100vh'
      },
      gridTemplateColumns: {
        'desktop': '1fr 280px 1fr',
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          // '&:hover': {
          //   transform: 'translateY(-1px)'
          // }
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      }

      addComponents(buttons)
    })
  ],
}