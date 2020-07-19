const withPWA = require('next-pwa')
const withFonts = require('next-fonts')

module.exports = withFonts(
  withPWA({
    pwa: {
      disable: process.env.NODE_ENV !== 'production',
      dest: 'public',
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: '@svgr/webpack',
      })
      return config
    },
  })
)
