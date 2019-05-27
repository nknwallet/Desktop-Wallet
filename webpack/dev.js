const webpack = require('webpack');
const common = require('./common');

module.exports = Object.assign(common, {
  mode: 'development',
  watch: true,
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  devtool: 'eval',
});
