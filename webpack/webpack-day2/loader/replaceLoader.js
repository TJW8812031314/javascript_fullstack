// 拿到入口文件的源码，替换里面的字符号串
module.exports = function (soucer) {
  // scource 就是源文件的内容
  // console.log(soucer, this.query)
  const options = this.query
  return soucer.replace("world", options.name)
}