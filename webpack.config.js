module.exports = {
  externals: {
    'TweenLite': 'TweenLite'
  },
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', { modules: true }],
          ],
        },
      },
    ],
  },
};