// 什么是浅拷贝，如何实现浅拷贝，什么是深拷贝，如何实现深拷贝？

// 浅拷贝
// 浅拷贝只复制一层对象的属性，并不包括对象里面的为引用类型的数据

// let a = {age: 1}
// let b = a
// a.age = 2
// console.log(b)

// Object.assign 
// let a = {age: 1}
// let b = Object.assign({}, a)
// a.age = 2
// console.log(b)

// ...浅拷贝 拷贝就是重新应用一个地址，把属性拷贝过来，互不干扰
// let a = {age: 1, ad:[12]}
// let b = {...a}
// a.age = 2
// // a.ad[0] = 2
// console.log(b)

// let a = {
//   age: 1,
//   jobs: {
//     first: 'coder'
//   }
// }
// let b = {...a}
// a.jobs.first = 'water'
// console.log(b.jobs.first) // water



// 深拷贝
// JSON.parse(JSON.stringify(Object))  局限性：
                                              // 会忽略 undefined
                                              // 会忽略 Symbol
                                              // 不能序列化函数
                                              // 不能解决循环引用对象


// let a = {
//   age: 1,
//   jobs: {
//     first: 'coder'
//   }
// }
// let b = JSON.parse(JSON.stringify(a))
// a.jobs.first = 'water'
// console.log(b.jobs.first)// coder

// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3
//   },
// }
// obj.c = obj.b
// obj.e = obj.a
// // obj.b.c = obj.c

// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj)
// { a: 1, b: { c: 2, d: 3 }, c: { c: 2, d: 3 }, e: 1 }
// { a: 1, b: { c: { c: 2, d: 3 }, d: 3 }, c: { c: 2, d: 3 }, e: 1 }

// let a = {
//   age: undefined,
//   sex: Symbol('man'),
//   jobs: function() {},
//   name: 'wn'
// }
// let b = JSON.parse(JSON.stringify(a))
// console.log(b) // {name: 'wn}'


// 如果你需要拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel


// 如何实现深拷贝？ // 递归拷贝
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {}
  for(let i in obj) {
    if(obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}

let test = {
  a: 1,
  b: {
    c: 2,
    d: 3
  },
}

let res = deepClone(test)
test.a = 10
console.log(res)