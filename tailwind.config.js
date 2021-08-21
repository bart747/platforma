module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'system-ui'],
      serif: ['ui-serif', 'serif'],
      mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      display: ['Roboto'],
      body: ['Roboto']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
