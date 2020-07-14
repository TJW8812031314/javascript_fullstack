// typeof 是否能正确判断数据类型？ instanceof 能正确判断对象的原理？

// typeof 1 // number
// typeof '1' // string
// typeof undefined // 'undefined'
// typeof Boolean // 'boolean'
// typeof Symbol // 'symbol
// let a = Symbol(1)

// typeof [] // 'object'
// typeof {} // 'object'
// typeof console.log() // 'function'

// 答：typeof对于原始数据类型来说，除了null，其他的都可以正确显示类型, typeof 对于对象来说，除了函数，都会显示object
//     instanceof是通过原型链来判断的

// 实现 instanceof 原理

let arr = new Array() // Array
// console.log(arr.__proto__) // [] // prototype
// console.log(arr.__proto__.__proto__) // object
// console.log(arr.__proto__.__proto__.__proto__) // null
// Object.prototype 包含 arr.__proto__.__proto__

// arr instanceof Array

function _instanceof(left, right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  while (true) {
    if(leftValue === null) {
      return false
    }
    if(leftValue === rightValue) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}
console.log(_instanceof(arr, Array))

