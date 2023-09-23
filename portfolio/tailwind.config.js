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
    },
  },
  plugins: [],
}

