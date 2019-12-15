// function Persion(name) {
//   this.name = name
// }

// class Persion {
//   constructor () {

//   }
// }

// let p = new Persion('wn')
// p._proto_ = Persion.prototype
// console.log(p._proto_)// Persion{}
// console.log(Persion._proto_)// function
// console.log(Function._proto_)// function
// Function._proto_ === object.prototype // false

// var foo = {}
// var foo = new Object()
// var F = function () {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a)// valA
// console.log(foo.b)// undefined
// console.log(F.b)// valB
// console.log(F.a)// valA


// 构造函数return是对象才会影响值
function Persion(name) {
  this.name = name
  return 1
}
let p = new Persion('wn')
console.log(p)// wn

//  for in 遍历的是数组的下标
//let arrr = {} === let arr = new Array
Array.prototype.method = function () {}
var myArray = [1, 2, 3, 4, 5, 6, 7]
myArray.name = '蜗牛'
for (let index in myArray) {
  console.log(index)//[0, 1, 2, 3, 4, 5, 6, name, method]
}
// for in
// 1. index 是索引， 不能直接进行几何运算
// 2. 遍历的顺序可能不是实际的数组的内部顺序进行的
// 3. 使用 for in 会遍历数组的所有可枚举属性，包括原型

//for of
// 1. 遍历的是数组的元素
// 2. 遍历不包括数组的原型和索引