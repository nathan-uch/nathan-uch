/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri-dark': '#1f1f1f',
        'pri-blue': '#5c80bc',
      },
    },
  },
  plugins: [],
}

