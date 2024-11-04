const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清理/dist文件夹
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //用于将 CSS 从主应用程序中分离
const { VueLoaderPlugin } = require('vue-loader') //

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'lib-style/[name].css' }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
      name: 'heyUi'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test:/\.(jpg|png|jpeg|gif|svg)$/,
        loader:"url-loader",
        options: {
          esModule: false
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
