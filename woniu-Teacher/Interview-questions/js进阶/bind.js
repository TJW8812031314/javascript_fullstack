// bind 返回一个函数体
let foo = {
  name: 'wn'
}


function bar(x) {
  console.log(this.name)
  console.log(x)
}
bar.bind(foo, [123])
// var p = new bar.bind(foo, [123]) 
Function.prototype.myBind = function(context) {
  // if() {}
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F(), 所以需要判断
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}