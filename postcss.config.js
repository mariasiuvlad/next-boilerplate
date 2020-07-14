// nextjs wants deps without require while storybook wants them with require
const withStorybook = (plugins) =>
  process.env.IS_STORYBOOK ? plugins.map((p) => require(p)) : p

const plugins = withStorybook(['tailwindcss', 'postcss-preset-env'])

module.exports = {
  plugins,
}
