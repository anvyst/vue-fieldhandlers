const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const chokidar = require('chokidar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(base, {
  mode: 'development',
  devtool: '#eval-source-map',
  entry: './dev/dev.js',
  plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
        template: './dev/index.html',
        inject: true,
      }),
  ],
  optimization: {
   noEmitOnErrors: true,
  },
  devServer: {
    hot: true,
    hotOnly: true,
    open: true,
    inline: true,
    stats: {
      children: false,
      modules: false,
      chunks: false,
    },
    port: 8080,
    before (app, server) {
      chokidar.watch([
        './**/*.html',
      ]).on('all', function () {
        server.sockWrite(server.sockets, 'content-changed');
      })
    },
  }
})
