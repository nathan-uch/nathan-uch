/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri-dark': '#1f1f1f',
      },
      boxShadow: {
        'reg': '3px 3px 0 #1f1f1f'
      },
      transitionDuration: {
        '1250': '1250ms',
        '1500': '1500ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

