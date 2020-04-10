- npx webpack --config 接文件名
# tree shaking
注意： 只有 ES module 的引入方式 ！！！
  optimization: {
    usedExports: true
  }
  "sideEffects": false,// 监控所有
  "sideEffects": ["*.css"],// 排除所有css， 不要对css模块的处理

# development vs Production 模式区分打包

# code Splitting 代码分割

# 打包分析stats.json

# webpack 官方推荐的编码方式

# Prefetching/Preloading modules 网络空闲的时候加载
