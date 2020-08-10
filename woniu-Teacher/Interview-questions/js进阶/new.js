// new 的原理是什么？ 通过new的方式创建对象和通过字面量创建对象有什么区别？


function Persion(name) {
  this.name = name
}

// var wn = new Persion('蜗牛')
var wn = create(Persion, '蜗牛')
console.log(wn) // wn instanceof Persion  // wn.__proto__ === Persion.prototype

// 1. 新生成一个对象
// 2. 链接到原型
// 3. 绑定this
// 4. 返回新对象
function create() {
  let obj = {}
  let Con = [].shift.call(arguments) // arguments ===> [Persion, '蜗牛']
  obj.__proto__ === Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ?  result : obj
}