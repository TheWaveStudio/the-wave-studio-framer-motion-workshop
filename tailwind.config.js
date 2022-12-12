/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /([^\s]+)?text-\S+/,
    },
    {
      pattern: /([^\s]+)?bg-\S+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#f4f4f9',
        primary: {
          100: '#004B66',
          200: '#005A7A',
          300: '#00698F',
          400: '#007fae',
          500: '#0087B8',
          600: '#0096CC',
          700: '#00A5E0',
          800: '#00B4F5',
          900: '#0ABEFF',
          1000: '#1FC3FF',
          1100: '#33C9FF',
          1200: '#47CEFF',
        },
      },
      fontSize: {
        root: '62.5%',
        body: '1.6rem',
        h1: '12rem',
        h2: '3rem',
        h3: '2rem',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      container: {
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          lg: '44px',
          xl: '42px',
          '2xl': '76px',
          '3xl': '88px',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
        },
      });
    },
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable =
            colorKey === 'DEFAULT'
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
