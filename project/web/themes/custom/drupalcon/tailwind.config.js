/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{twig,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poetsen-one': '"Poetsen One", sans-serif;'
      }
    },
  },
  plugins: [],
}

