/** @type {import('tailwindcss').Config} */

const { colors } = require('./src/tokens/colors');

module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/@digital-art-dealers/react-native-component-lib/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
      },
    },
  },
  plugins: [],
};
