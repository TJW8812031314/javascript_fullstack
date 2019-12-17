// const ws = new WeakSet()
// ws.add({a: 1})
// ws.add()
// ws.add(Symbol(1))
// weakSet 只能存放对象 弱引用

// const a = [[1, 2], [3, 4]]
// const ws = new WeakSet(a)
//weakSet 可以接收一个数组作为参数，该数组的所有的成员，都会自动成为weakSet实例对象
// console.log(ws)

// const b = [5, 6]
// const wn = new WeakSet(b)
// console.log(wn)
// 但是传过来的数组成员只能是对象



const ws = new WeakSet()
const obj = {}
const foo = {}
// ws.add(window)
ws.add(obj)
console.log(ws.has(obj))
// ws.delete(obj)
ws.add(foo)
console.log(ws)
console.log(ws.size)

// ws.add.forEach(item => {
//   // console.log(item)
// })
// 


// 保证foo构造函数的实例只能在Foo的实例调用
const foos = new WeakSet()
// foos对实例的引用， 不会被计入到内存回收机制当中，所以删除实例的时候不用考虑foos，也不出现内存泄露
class Foo {
  constructor() {
    foos.add(this)
  }

  method () {
    if (!foos.has(this)) {
      throw new TypeError('error')
    }
  }
}
let faa = new Foo()