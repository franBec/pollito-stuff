module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
theme: {
    fontFamily: { sans: ["Montserrat", "sans-serif"] },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'oldMap': "url('/img/map.jpg')",
      }
    }
  },
  plugins: [],
}
