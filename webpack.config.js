const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const pathCom = '/assets/dev'
module.exports = {
  entry: {
    index: __dirname + pathCom + '/javascript/application.js',
    vendor: [
      __dirname + pathCom + '/vendor/jquery-3.1.0.min.js',
      __dirname + pathCom + '/vendor/scrollify.js',
      __dirname + pathCom + '/vendor/slick.min.js'
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].min.js?[hash]'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          'html-loader',
          'pug-html-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('public'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './' + pathCom + '/html/page/index.pug',
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'company.html',
      template: './' + pathCom + '/html/page/company.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'commercial.html',
      template: './' + pathCom + '/html/page/commercial.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'philosophy.html',
      template: './' + pathCom + '/html/page/philosophy.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'privacyPolicy.html',
      template: './' + pathCom + '/html/page/privacyPolicy.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'product1.html',
      template: './' + pathCom + '/html/page/product1.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'product2.html',
      template: './' + pathCom + '/html/page/product2.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'shopList.html',
      template: './' + pathCom + '/html/page/shopList.pug'
    })
  ],
  devServer: {
    prot: 3000,
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
}