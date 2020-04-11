// 拿到入口文件的源码，替换里面的字符号串

const loaderUtils = require('loader-utils')

module.exports = function (soucer) {
  // scource 就是源文件的内容
  // console.log(soucer, this.query)
  const callback = this.async() 

  const options = loaderUtils.getOptions(this);
  setTimeout(() => {
   const result = soucer.replace("world", options.name)
    callback(null, result)
  }, 1000)
}

// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );