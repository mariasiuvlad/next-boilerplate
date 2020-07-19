// nextjs wants deps without require while storybook wants them with require
const forStorybook = (plugins) =>
  plugins.map((p) => (process.env.IS_STORYBOOK ? require(p) : p))

const plugins = forStorybook(['tailwindcss', 'postcss-preset-env'])

module.exports = {
  plugins,
}
