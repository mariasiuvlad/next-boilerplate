module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
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
        display: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        base: '#323335',
        primary: '#fcd71b',
        default: '#ffffff',
        error: '#e03030',
        warning: '#ffa500',
      },
      variants: {
        gridTemplateColumns: ['responsive', 'hover', 'focus'],
        outline: 'false',
      },
    },
  },
  variants: {},
  plugins: [],
}
