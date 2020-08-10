// apply 只只接受两个参数，fn, Array
let foo = {
  name: 'wn'
}


function bar(x) {
  console.log(this.name)
  console.log(x)
}
bar.apply(foo, [1]) // bar.call(foo, 1, 2, 3)

Function.prototype.myApply = function(context) {
  // this ==> bar this指向调用调用myApply的函数
  if(typeof this !== 'function') {
    throw new Error('error')
  }

  context = context || window // 不传值默认为window
  context.fn = this
  let result
  // 处理参数 和 call 有区别
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  }else {
    result = context.fn()
  }
  delete context.fn
  return result
}