module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,html,js}"
  ],
  theme: {
    colors: {
      textPrimary: '#FFFFFF',
      darkGrey: '#222222',
      lightGrey: '#6B6B6B',
      nasaBlue: '#0B3D91',
      nasaRed: '#FC3D21',
      nasaWhite: '#FFFFFF'
    },
    screens: {
      'tablet': '500px',
      // @media (min-width: 500px)
      'largeTablet': '850px',
      // @media (min-width: 650px)
      'desktop': '900px'
      // @media (min-width: 900px)
    },
    extend: {},
  },
  plugins: [],
}
