module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'Georgia', 'serif'],
      'mono': ['IBM Plex Mono'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
