let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{loader: 'babel-loader'}],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      },
      {
        test: /\.less$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'less-loader'}]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [{loader: 'url-loader', options: {limit: 8192}}]
      },
      {
        test: /\.(eot|svg|woff|woff2|wtf)$/,
        use: [{loader: 'url-loader', options: {limit: 8192}}]
      },
      {
        test: /\.vue$/,
        use: [{loader: 'vue-loader'}]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    open: true,
    port: 8080,
    compress: true
  }
};