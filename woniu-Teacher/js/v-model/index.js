const a = {
  b: 1
}

function fn() {
  console.log('a的值发生改变了', a.b)
}

function binData() {
  // 返回对象上存在的箭值 key = b，v代表b的值
  Object.keys(a).map(key => {
    let v = a[key]
  // Object自带的方法，监听对象属性 
  //  第一个值监听的对象，第二个值key指a的箭值
  Object.defineProperty(a, key, {
    get () {// 读取属性调用的方法
      console.log('正在读取a里面的值')
      return v
    },
    set (newVal) {// 写入属性时调用的方法
      v = newVal
      fn()
    }
  })
  })
}
binData()
// console.log(a.b)// 正在读取a里面的值 1
a.b = 123