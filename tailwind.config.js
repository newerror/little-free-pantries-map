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
      fontSize: {
        piqeno: '1.075rem',
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
