// call 内部实现原理

let foo = {
  name: 'wn'
  // fn: function bar() {}
}

function bar() {
  console.log(this.name)
}
// bar.call(foo)

Function.prototype.myCall = function(context) {
  // console.log(this)
  if (typeof this !== 'function') {
    throw new Error('error')
  }

  context = context || window // 默认环境为window
  context.fn = this
  // console.log(this) // foo
  const args = [...arguments].slice(1) // [].slice.apply(arguments)
  const result = context.fn(...args)
  delete context.fn
  return result
}
bar.myCall()
// new.Function().myCall()