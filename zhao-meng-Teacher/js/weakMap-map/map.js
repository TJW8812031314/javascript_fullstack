global.gc()
console.log(process.memoryUsage())

// 引用计数
let array = new Array(4 * 10024)// [] // + 1

// let map = new Map()
let map = new WeakMap()
// weakMap 即便 key 引用这 Array 但是 垃圾回收不把她考虑在内 依然回收Array
map.set(array, 4)// + 1
array = null  // -1  计数为：0 回收
global.gc()
console.log(process.memoryUsage())