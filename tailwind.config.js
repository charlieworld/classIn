/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#EB9F9F',
        dark: '#B77071',
      },
      secondary: {
        light: '#F8ECC9',
        DEFAULT: '#A79C8E',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
