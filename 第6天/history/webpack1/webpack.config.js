let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack必须采用commonJs写法
module.exports = {
  // 入口文件的配置项
  entry: './src/main.js',
  // 出口文件的配置项
  output: {
    filename: 'bundle.js', // 打包的文件名字
    path: path.join(__dirname, './dist'), // 打包的文件路径
  },
  // 模块：配置不同格式文件的解析器
  module: {
    rules: [
      // js loader
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'}
        ],
        exclude: /node_modules/
      },
      // css loader
      {
        test: /\.css$/,
        use: [ // loader按使用顺序由右(下)往左(上)写
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      // less loader
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      },
      // 图片 loader
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 图片大小小于limit设置的8192B的会转化成base64字符串引入
            }
          }
        ]
      },
      // 字体图标 loader
      {
        test: /\.(eot|svg|woff|woff2|wtf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  // 插件：用于生产模板和各种功能
  plugins: [
    new HtmlWebpackPlugin({ // 自动生成html并插入到dist目录中
      template: path.join(__dirname, './src/index.html'), // 使用的模板路径
      // filename: 'myIndex.html' // 生成html的名字
    })
  ],
  // 配置webpack开发服务功能
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    open: true, // 自动打开浏览器
    port: 8080,
    compress: true, // 服务器压缩
  }
};