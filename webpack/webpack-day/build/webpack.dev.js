const webpack = require('webpack')

const devConfig = {
  mode: 'development',// 开发环境
  devtool: "cheap-module-eval-source-map",// 开发环境

  plugins: [// 插件
    new webpack.HotModuleReplacementPlugin({})
  ],
  // 跑成一个服务
  devServer: {
    contentBase: "../dist",
    open: true,
    hot: true,
    hotOnly: true,// 即使HMR不生效，浏览器也不会自动刷新
    port: "8080",
    // proxy: {// 跨域代理
    //   '/api': 'http://localhost:3000'
    // }
  },
  optimization: {
    usedExports: true,
    splitChunks: {// 代码分割
      chunks: "all",// 同步异步都行
      minChunks: 1
    }
  }
}

module.exports = devConfig