const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathCom = './assets/dev'
module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'test.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    prot: 3000,
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  },
  mode: 'production'
}