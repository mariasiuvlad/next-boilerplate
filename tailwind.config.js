module.exports = {
  purge: ['./src/**/*.tsx', './.storybook/**/*.js'],
  theme: {
    extend: {
      borderRadius: {
        xl: '1rem',
      },
      container: {
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        sans: ['Gotham Rounded', 'Roboto', 'sans-serif'],
      },
      colors: {
        yellow: {
          100: '#FFFBE8',
          200: '#FEF5C6',
          300: '#FEEFA4',
          400: '#FDE35F',
          500: '#FCD71B',
          600: '#E3C218',
          700: '#978110',
          800: '#71610C',
          900: '#4C4108',
        },
        gray: {
          100: '#EEEEEE',
          200: '#D5D5D6',
          300: '#BBBCBD',
          400: '#89898B',
          500: '#565759',
          600: '#4D4E50',
          700: '#323335',
          800: '#292a2b',
          900: '#1A1A1B',
        },
      },
      variants: {
        gridTemplateColumns: ['responsive', 'hover', 'focus'],
      },
    },
  },
  variants: {},
  plugins: [],
}
