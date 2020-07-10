const path = require('path')

const AppSourceDir = path.join(__dirname, '..', 'src')

module.exports = async ({config}) => {
  // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
  const svgRule = config.module.rules.find((rule) =>
    'test.svg'.match(rule.test)
  )
  svgRule.exclude = [AppSourceDir]

  config.module.rules.push({
    test: /\.svg$/,
    include: AppSourceDir,
    use: '@svgr/webpack',
  })

  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [require('postcss-preset-env'), require('tailwindcss')],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  })

  return config
}
