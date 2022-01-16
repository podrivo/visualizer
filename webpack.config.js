module.exports = {
  externals: {
    'TweenLite': 'TweenLite'
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          // presets: [
          //   ['latest', { modules: true }],
          // ],
        },
      },
    ],
  },
};