// const wm = new WeakMap()
// const key = {foo: 1}
// wm.set(key, 2)
// console.log(wm.get(key))

// const k1 = [1, 2, 3]
// const k2 = [4, 5, 6]
// const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']])
// console.log(wm2.get(k2))


// const map = new Map()
// // map.set(1, 2)// 因为 1 不是Object
// map.set(null, 2)
// console.log(map.get(1))
// console.log(map.get(null))
// WeakMap 只接受对象作为键名，不接受其他类型的值作为键名

// const e1 = document.getElementById('foo')
// const e2 = document.getElementById('bar')
// const arr = [
//   [e1, 'foo元素'],
//   [e2, 'bar元素']
// ]
// // 当不需要e1 和 e2 的时候，必须手动删除
// arr[0] = null
// arr[1] = null


// const wm = new WeakMap()
// const element = document.getElementById('test')
// wn.set(element, 'some infomation')

const wm = new WeakMap()
let key = {}
let obj = {foo: 1}

wm.set(key, obj)
obj = null
console.log(wm.get(key))// { foo: 1 }
// WeakMap 弱引用只是键名，不是键值

const wm = new WeakMap()
console.log(wm.size) //undefined
// WeakMap 没有size, forEach， clear


let myElement = document.getElementById('logo')
let myWeakMap = WeakMap()

myWeakMap.set(myElement, {itemsClicked: 0})

let timesClicked = 0
myElement.addEventListener('click', function() {
  let logoData = myWeakMap.get(myElement)
  logoData.timesClicked++
})
