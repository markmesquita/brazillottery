module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif']
      },
      backgroundColor: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
