// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(a)

// let a = {
//   name: 'wn',
//   book: {
//     title:"You Don't Konw Js",
//     price: '45'
//   }
// }
// let b = a
// a.book.price = 50
// console.log(b)

// let a = {
//   name: 'wn'
// }
// let b = a
// a.name = '蜗牛'
// console.log(b)

let a = {
  name: 'wn',
  book: {
    title:"You Don't Konw Js",
    price: '45'
  }
}
//... 和 assign 既不是深拷贝 也不是浅拷贝 要看数据类型
// let b = Object.assign({}, a)
// let b = (...a)
// a.name = "蜗牛"
// a.book.price = '55'
// console.log(b)

// slice 既不是深拷贝 也不是浅拷贝 要看数据类型
// let a = [0, '1', [2, 3]]
// let b = a.slice(1)
// console.log(b)
// ['1', [2, 3]]

// 将a转换为字符串， 再转换为对象
let b = JSON.parse(JSON.stringify(a))
console.log(b)

a.name = '蜗牛'
a.book.price = '55'
console.log(b)