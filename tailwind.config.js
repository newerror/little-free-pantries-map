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
    extend: {
      fontFamily: {
        body: ['Noto Sans', 'sans-serif'],
        handwritten: ['Yusei Magic', 'sans-serif'],
        title: ['Fredoka One', 'sans-serif'],
      },
      zIndex: {
        top: 450,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
