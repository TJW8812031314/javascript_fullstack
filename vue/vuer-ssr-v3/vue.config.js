// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // transpileDependencies: true,
  chainWebpack: webpackConfig => {
    if (!process.env.SSR) {
      // 客服端打包
      // webpackConfig.devServer.disableHostCheck(true)
      return
    }

    webpackConfig
      .entry('app')
      .clear()
      .add('./src/main.server.js')
    // 让webpack以node适用的方式处理动态导入
    webpackConfig.target('node')
    // 使用node 风格导出模块
    webpackConfig.output.libraryTarget("commonjs2");
    // 将服务器的整个输出构建为单个JSON文件的插件
    webpackConfig
      .plugin("manifest")
      .use(new WebpackManifestPlugin({ fileName: "ssr-manifest.json" }));

    webpackConfig.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

    webpackConfig.optimization.splitChunks(false).minimize(false);
    webpackConfig.plugins.delete("preload");
    webpackConfig.plugins.delete("prefetch");
    webpackConfig.plugins.delete("progress");
    webpackConfig.plugins.delete("friendly-errors");

  }
}



