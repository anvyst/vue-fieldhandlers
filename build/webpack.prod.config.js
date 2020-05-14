const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'vue-fieldhandlers.js',
    library: 'VueFieldHandlers',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})],
  }
});
