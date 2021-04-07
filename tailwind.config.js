module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-gh': '#06090f',
        'dark-gh': '#0d1117',
        'dark-gh-banner': '#161b22',
        'dark-gh-btn': '#21262d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
