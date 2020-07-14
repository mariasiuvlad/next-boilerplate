// nextjs wants deps without require while storybook wants them with require
const withStorybook = (plugins) =>
  plugins.map((p) => (process.env.IS_STORYBOOK ? require(p) : p))

const plugins = withStorybook(['tailwindcss', 'postcss-preset-env'])

module.exports = {
  plugins,
}
