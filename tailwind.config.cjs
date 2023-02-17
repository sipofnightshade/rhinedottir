const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pyro: '#ef7938',
        hydro: '#4cc2f1',
        electro: '#b382cd',
        cryo: '#9fd6e3',
        dendro: '#a5c83b',
        anemo: '#39cac1',
        geo: '#fab632',
        '5-star1': '#D47E1C',
        '5-star2': '#C47821',
        '4-star1': '#7B4BB9',
        '4-star2': '#7D649E',
        '3-star1': '#347C9D',
        '3-star2': '#2A80A7',
        '0-star1': '#DEE1E3',
        '0-star2': '#CBD0D2'
      },
      fontSize: {
        xs: ['12px', '15px'],
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['18px', '23px'],
        xl: ['20px', '25px'],
        '2xl': ['24px', '30px'],
        tb: ['15px', '18px']
      },
      height: {
        // rename to vh-208
        vh208: 'calc(100vh - 208px)',
        'mb-screen': 'calc(100vh - 236px)',
        '94p': '94%'
      },
      maxHeight: {
        vh50: 'calc(50vh - 16px)'
      },
      width: {
        '94p': '94%'
      },
      grayscale: {
        80: '80%'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        20: 'repeat(20, minmax(0, 1fr))',
        24: 'repeat(24, minmax(0, 1fr))'
      }
    },

    screens: {
      'xs-300': '300px',
      'xs-375': '375px',
      xs: '455px',
      ...defaultTheme.screens
    },
    /** Special height formula i found that works perfectly */
    minHeight: {
      fullscreen: 'calc(100vh - 20px)'
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
