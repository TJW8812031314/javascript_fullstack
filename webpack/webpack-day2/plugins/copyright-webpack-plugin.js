class CopyrightWebpackPlugin {
  // constructor(options) {
  //   console.log(options)
  // }

  //compiler: webpack实例一个钩子
  apply(compiler) {
    // compilation本次打包的过程
    compiler.hooks.compile.tap("CopyrightWebpackPlugin", (compilation) => {
      console.log('开始')
    })

    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        // console.log(compilation.assets)
        compilation.assets["test.txt"] = {// 打包快结束插入一个文件
          source: () => {
            return "hello txt"
          },
          size: () => {
            return 1024
          }
        }
        cb()
      }
    )
  }
}

module.exports = CopyrightWebpackPlugin