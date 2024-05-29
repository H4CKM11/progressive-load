/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'viridian': '#6B9080',
        'cambridge-blue': '#A4C3B2',
        'mint-green': '#CCE3DE',
        'azure': '#EAF4F4',
        'mint-cream': '#F6FFF8',
      },
      fontFamily: {
        'neue-haas-grotesk-display': ['neue-haas-grotesk-display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

