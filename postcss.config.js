// nextjs wants deps without require while storybook wants them with require
const withStorybook = (dep) => (process.env.IS_STORYBOOK ? require(dep) : dep)

const plugins = ['tailwindcss', 'postcss-preset-env'].map(withStorybook)

module.exports = {
  plugins,
}
