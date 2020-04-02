const path = require('path')
// 打包命令 npx webpack --config webpacktest.js
module.exports = {
  entry: "./index.js", // 指定打包的入口文件
  output: {// 指定打包后的资源位置
    path: path.resolve(__dirname, "./build"),
    filename: "lm.js"
  }
}