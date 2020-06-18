const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: true,
    dest: 'public',
  },
  env: {
    customKey: 'my-value',
  },
})
