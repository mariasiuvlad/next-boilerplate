const path = require('path')
const AppSourceDir = path.join(__dirname, '..', 'src')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../stories/**/*.stories.(tsx|mdx)', // root stories folder
    '../src/**/*.stories.(tsx|mdx)', // component stories
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
    config.module.rules.find((rule) => 'test.svg'.match(rule.test)).exclude = [AppSourceDir]
    // Configure SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      include: AppSourceDir,
      use: '@svgr/webpack',
    })

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.css$/

    /**
     * Configure CSS modules
     * @link https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss
     */
    config.module.rules.push({
      test: /\.css$/,
      include: AppSourceDir,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {modules: {auto: true}, importLoaders: 1},
        },
        'postcss-loader',
      ],
    })

    // Make whatever fine-grained changes you need
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
      }),
    ]

    // Return the altered config
    return config
  },
}
