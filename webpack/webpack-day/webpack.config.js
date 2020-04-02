const path = require('path')

module.exports = {
  entry: "./index.js", // 指定打包的入口文件
  output: {// 指定打包后的资源位置
    // 公共路径设置
    // publicPath: "https://cdn.biadu.com",
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  }
}