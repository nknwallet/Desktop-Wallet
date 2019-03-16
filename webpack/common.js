const webpack = require('webpack');
const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    electron: resolve(__dirname, '..', 'src/electron.js'),
    app: resolve(__dirname, '..', 'src/app.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '..', 'build/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            ['@babel/transform-runtime'],
            'transform-async-to-generator',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|otf)$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, '..', 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['rodal/lib/rodal.css'],
    }),
  ],
  node: {
    __dirname: false,
  },
};
