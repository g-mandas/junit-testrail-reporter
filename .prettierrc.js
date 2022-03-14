module.exports = {
  plugins: [
    require.resolve('prettier-plugin-package'),
    require.resolve('prettier-plugin-organize-imports'),
  ],
  printWidth: 100,
  proseWrap: 'always',
  singleQuote: true,
};
