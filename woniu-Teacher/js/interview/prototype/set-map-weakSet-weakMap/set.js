// set
// Array.from() 将类数组转换一个数组
var a = new Set() //类数组，成员的值唯一的

Array.from([2, 3, 4, 5, 6, 4, 3, 2]).forEach(x => a.add(x))

for(let index of add) {
  // console.log(add)
}

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
// console.log(items.length)// undefind
console.log(items.size)

//[...new Set(array)]
// [...new Set('abcd)].join('')// 'abcd'

// 对于set而言 NaN === NaN
let set = new Set
let a = NaN
let b = NaN
set.add(a)
set.add(b)
console.log(set)// NaN


// 对于set而言空对象是不相等的
set.add({})
console.log(set.size)// 1
set.add({})
console.log(set.size)

// set.add() 的方法
let s = new Set() 
s.add(1).add(2).add(2)
console.log(s.size)// 2
// set.has() 的方法
console.log(s.has(1))// true
console.log(s.has(2))// true
console.log(s.has(3))// false
// set.delete() 的方法
s.delete(2)
console.log(s.has(2))

const properies = {
  'width': 1,
  'heigth': 1
}
if (properies[someName]) {
  // ...
}
const properies = new Set()
properie.add('width')
properies.add('heigth')

if(properies.has(someName)) {
  // ...
}

// Array.from()方法
const item = new Set([1, 2, 3, 4])
const array = Array.from(item)
console.log(array)

let set = new Set(['red', 'green', 'blue'])
for (let item of set.keys()) {
  console.log(item)// [red, green, blue]
}

for (let item of set.values()) {
  console.log(item)// [red, green, blue]
}

for(let item of set.entries()) {
  console.log(item)// [{'red': 'red'}, {'green': 'green'}, {'blue': 'blue'}]
}
// set = set.value
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)// true

set.forEach((value, key) => {
  console.log(key + ';' +value)
})

let arr = [...set]
console.log(arr)

let testArr = [1, 2, 3, 4, 3, 4, 2]
let unique = [...new Set(testArr)]

let oSet = new Set([1, 2, 3])
oSet = [...oSet].map(x => x * 2)
// oSet = [...oSet].filter(x => (x % 2) == 0)// 过滤
console.log(oSet)//[2, 4, 6]

let b = new Set([4, 3, 2])
// 并集
let union = new Set([...oSet, ...b])

// 交集
let intersect = new Set([...oSet].filter(x => b.has(x)))

// 差集
let difference = new Set([...oSet].filter(x => !b.has(x)))