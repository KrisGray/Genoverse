const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry   : [__dirname + '/index.js', __dirname + '/scss/genoverse.scss'],
  output  : { filename: 'dist/js/genoverse.js' },
  module: {
    rules: [{
      test:/\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
    },{
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000&publicPath=../&name=./fonts/fontawesome-webfont.[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/css/genoverse.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/fonts',
      to:   __dirname + '/dist/fonts'
    },
    {
      from: __dirname + '/i',
      to:   __dirname + '/dist/i'
    }])

  ],
};
