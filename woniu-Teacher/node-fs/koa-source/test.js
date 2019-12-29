let a = {
  name: 'wn',
  age: 18
}

// let b = a// 浅拷贝
// b.sex = 'body'
let b = Object.create(a)// 深拷贝
console.log(a)