// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      '/.expo/**/*',
      '/node_modules/**/*',
      '/dist/**/*',
      '*.config.js',
      'babel.config.js',
      'metro.config.js',
      'app.config.js',
      'expo-env.d.ts',
    ],
    plugins: {
      'typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      '@tanstack/react-query': require('@tanstack/eslint-plugin-query'),
    },
    rules: {
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/jsx-uses-react': 'off',
      'typescript-eslint/no-explicit-any': 'error',
    },
  },
]);
