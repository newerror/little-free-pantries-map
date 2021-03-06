const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        body: ['Noto Sans', 'sans-serif'],
        handwritten: ['Yusei Magic', 'sans-serif'],
        title: ['Fredoka One', 'sans-serif'],
      },
      fontSize: {
        piqeno: '1.075rem',
      },
      zIndex: {
        top: 450,
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
      textColor: ['active'],
      textDecoration: ['active'],
    },
  },
  plugins: [],
}
