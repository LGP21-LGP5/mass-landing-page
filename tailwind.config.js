module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: theme => ({
        'multimedia': '#682e8d',
        'operations': '#006fb7'
      }),
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'operations-grad-from': '#9ec9e4',
      'operations-grad-to': '#f1f8fb',
      'multimedia-grad-from': '#b293c4',
      'multimedia-grad-to': '#f6f3f9',
    }),
    fontFamily: {
      'poppins': ['Poppins Regular'],
      'poppins-bold': ['Poppins Bold'],
      'poppins-semibold': ['Poppins SemiBold'],
      'poppins-light': ['Poppins Light'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
