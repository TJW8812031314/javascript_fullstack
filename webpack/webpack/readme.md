# npm i webpack webpack-cli --save-dev
# npm i lodash --save-dev
# npm install style-loader css-loader --save-dev
# npm init -y
# npx webpack

## dist 存放打包后的文件

# src 存放入口文件

# webpack.config.js // webpack的配置文件
- sourceMap 文件内容出处方便调试

- webpack中的 常用模块(module) 用来如何处理项目中的不同类型模块

- webpack 模块支持语法：
  es6 import语法
  Commonjs require() 语句
  AMD define 和 require 语句
  css/sass/less 文件中的@import 语句
  样式 (url(...)) 或者html文件(<img src="...">)中的图片链接

# npm i postcss-loader autoprefixer --save-dev 给css添加前缀

autoprefixer 进行浏览器的部分兼容补全

# 抽取样式将css单独打包
  npm i mini-css-extract-plugin --save-dev

# 压缩打包
 - 压缩css(optimize-css-assets-webpack-plugin)
 - 压缩 js (uglifyjs-webpack-plugin)

# 为css js文件添加hash值， 防止缓存

# html打包
 - html-webpack-plugin

# 清理目录
 - clean-webpack-plugin

# webpack处理图片和优化
 - file-loader
 - image-webpack-loader


https://github.com/tcoopman/image-webpack-loader


