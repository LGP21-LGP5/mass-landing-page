module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins Regular'],
      'poppins-bold': ['Poppins Bold'],
      'poppins-semibold': ['Poppins SemiBold'],
      'poppins-light': ['Poppins Light'],
     },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'operations-blue-grad-from': '#9ec9e4',
      'operations-blue-grad-to': '#f9fcfd'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
