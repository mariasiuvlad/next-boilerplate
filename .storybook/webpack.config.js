const path = require('path')

const AppSourceDir = path.join(__dirname, '..', 'src')

module.exports = async ({config}) => {
  // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
  config.module.rules.find((rule) => 'test.svg'.match(rule.test)).exclude = [
    AppSourceDir,
  ]
  // Configure SVG loader
  config.module.rules.push({
    test: /\.svg$/,
    include: AppSourceDir,
    use: '@svgr/webpack',
  })

  // First we prevent webpack from using Storybook CSS rules to process CSS modules
  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/
  /**
   * Configure PostCSS modules loader
   * @link https://github.com/postcss/postcss-loader#css-modules
   */
  config.module.rules.push({
    test: /\.module\.css$/,
    include: path.resolve(__dirname, '../'),
    use: [
      'style-loader',
      {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [require('postcss-preset-env'), require('tailwindcss')],
        },
      },
    ],
  })

  return config
}
