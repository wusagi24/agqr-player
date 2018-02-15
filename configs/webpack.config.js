const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_DIR = 'src';
const OUTPUT_DIR = 'dist';

const rootPath = path.resolve('');
const srcPath = path.join(rootPath, ENTRY_DIR);
const distPath = path.join(rootPath, OUTPUT_DIR);

module.exports = {
  entry: {
    bundle: [path.join(srcPath, 'index.tsx')],
  },

  output: {
    path: distPath,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          }
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ],
  },

  devtool: 'source-map',

  devServer: {
    port: 8080,
    contentBase: distPath,
    historyApiFallback: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
};
