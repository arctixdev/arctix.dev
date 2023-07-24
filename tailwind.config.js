/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      colors: {
        'main': '#272727',
        'secondary': '#3A3A3A',
        'third': '#797979',
        'text-main': '#FFFFFF',
        'text-secondary': '#BFBFBF',
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"]
      },
      extend: {},
    },
    plugins: [],
  }