/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["ui-serif", "serif"],
      mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      display: ["Roboto"],
      body: ["Roboto"],
    },
    extend: {},
  },
  plugins: [],
}
