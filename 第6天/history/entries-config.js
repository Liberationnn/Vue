let path = require('path');
console.log(path.resolve('./dist'));
// webpack必须采用commonJs写法
module.exports = {
  entry: {
    main: './src/main.js',
    main1: './src/main1.js'
  }, // 打包的入口文件，webpack会自动查找相关的依赖进行打包
  output: {
    filename: '[name].js', // 打包后的名字
    path: path.join(__dirname, './dist'), // 将相对路径解析成一个绝对路径
  }
};