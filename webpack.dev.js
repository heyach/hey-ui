const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin') //html模板

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  // externals: ['vue', 'element-ui'],
  plugins: [
    new HtmlWebpackPlugin({
      title: '通用组件',
      template: 'src/index.html'
    })
  ]
})
