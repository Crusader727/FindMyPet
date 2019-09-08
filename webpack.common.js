const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: {
    gx: './src/index.tsx'
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/,
      /scss\.d\.ts$/
    ]),
    new ForkTsCheckerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/'
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: srcPath('components'),
      app: srcPath('app'),
      pages: srcPath('pages'),
      core: srcPath('core'),
      common: srcPath('common'),
      actions: srcPath('actions'),
      reducers: srcPath('reducers'),
      types: srcPath('types')
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  }
};
