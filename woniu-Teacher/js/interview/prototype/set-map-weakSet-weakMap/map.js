// const data = {}
// const element = document.getElementById('myDiv')

// data[element] = 'wnwnwn'
// data['[object HTMLDivElement']

// const m = new Map()
// const o = {p: 'Hello world'}

// m.set(o, 'content')// .set()是map的方法，用来设置或修改实力当中已有的值
// m.delete(o)
// console.log( m.has(o))
// console.log(m.get(o))


// const map = new Map([
//   ['name', '蜗牛'],
//   ['sex', 'boy']
// ])
// const map = new Map()

//如何取到map值 map接收一个对象
// items.forEach(([key, value]) => map.set(key, value))

// items = {
//   'name': '蜗牛',
//   'sex': 'boy'
// }
// console.log(map.has('name'))
// console.log(map.size)

//实际上不仅仅是数组 任何具有Iterator接口，
//只要数组中的每一成员都是双元素的数据结构， 都可以作为Map的参数
//所以Set，Map都可以用来生成新的Map

const set = new Set([
  ['foo', 1],
  ['bor', 1]
])

const m1 = new Map(set)

console.log(m1.get(['foo']))

const m2 = new Map([['baz', 3]]) // 只要数组中的每一成员都是双元素的数据结构, 都可以作为Map的参数
console.log(m2)// Map { 'baz' => 3 }
const m3 = new Map(m2)

console.log(m3.get('baz'))//3

// key值不能重复 找不到key值undefined
const map = new Map()
map.set(1, 'aaa').set(1, 'bbb')
console.log(map)// Map { 1 => 'bbb' } key值不能重复
console.log(map.set(2)) //undefined

// 相同的值在不同对象的引用，Map结构视为两个键
const map = new Map()
const k1 = ['a']
const k2 = ['a']
map.set(k1, 111).set(k2, 222)
console.log(map)// Map { 'a' => 111 },{ 'a' => 222 }

// -0 和 +0 是一样key值
let map = new Map()
map.set(-0, 123)
console.log(map.get(+0))// 123

map.set('true', 1)
map.set(ture, 1)
console.log(map.get(1))