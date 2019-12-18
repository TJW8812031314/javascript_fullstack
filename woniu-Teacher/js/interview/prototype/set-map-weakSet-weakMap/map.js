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

// const set = new Set([
//   ['foo', 1],
//   ['bor', 1]
// ])

// const m1 = new Map(set)

// console.log(m1.get(['foo']))

// const m2 = new Map([['baz', 3]]) // 只要数组中的每一成员都是双元素的数据结构, 都可以作为Map的参数
// console.log(m2)// Map { 'baz' => 3 }
// const m3 = new Map(m2)

// console.log(m3.get('baz'))//3

// // key值不能重复 找不到key值undefined
// const map = new Map()
// map.set(1, 'aaa').set(1, 'bbb')
// console.log(map)// Map { 1 => 'bbb' } key值不能重复
// console.log(map.set(2)) //undefined

// // 相同的值在不同对象的引用，Map结构视为两个键
// const map = new Map()
// const k1 = ['a']
// const k2 = ['a']
// map.set(k1, 111).set(k2, 222)
// console.log(map)// Map { 'a' => 111 },{ 'a' => 222 }

// -0 和 +0 是一样key值
// let map = new Map()
// map.set(-0, 123)
// console.log(map.get(+0))// 123

// map.set('true', 1)
// map.set(ture, 1)
// console.log(map.get(1))

// 实例属性和操作方法
// const map = new Map()
// map.set('foo', true)
// map.set('bar', false)

// map.set('abc', 123).set(22, 'abc').set(undefined, NaN)

// console.log(map.get(22))// abc
// console.log(map.has(123))//false

// map.delete(22)
// map.clear()//清除//{}


// 遍历
// Map 数据结构的遍历顺序一定是按照数据本身的数据结构
// const map = new Map([
//   ['foo', 'no'],
//   ['bar', 'yes']
// ])

// console.log(map.keys())// [Map Iterator] { 'foo', 'bar' }

// // console.log(Object.prototype.toString.call(map.keys())) // 判断数据类型
// for(let key of map.keys()) {
//   console.log(key)//foo bar
// }
// for(let value of map.values()) {
//   console.log(value)// no yes
// }
// for(let item of map.entries()) {
//   console.log(item[0], item[1])// foo no   bar yes
// }

// for(let [key, value] of map) {
//   console.log([key, value])// foo no   bar yes
// }

// map.prototype[Symbol.iterator] === map.prototype.entries


// Map转为数组结构
// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three']
// ])
// [...map.keys()]

// map.forEach((value, index, map) => {
//   console.log(index + ':' + value, map)
// })

// console.log(Array.from(map))

// Array.from(map).map((k, v) => {
//   console.log(`${k}:${v}`)
// })

// map.set(1, 'a').set(2, 'b').set(3, 'c')
// Array.from(map).filter(([k, v]) => {
//   console.log(k<3)
// })


// 类型转换

Map => 对象
function setMapToObj(strMap) {
  let obj = Object.create(null)// {}
  for (let [k, v] of strMap) {
    console.log([k, v])
    obj[k] = v
  }
  return obj
}

const myMap = new Map()
myMap.set('yes', true).set('on', false)
console.log(setMapToObj(myMap))

// 对象转map
// let obj = {
//   'yes': true,
//   'no': false
// }

// function setMapToObj(obj) {
//   let strMap = new Map()// {}
//   for (let item in obj) {
//     console.log(item)// yes  on
//     strMap.set(item, obj[item])
//   }
//   return strMap
// }
// console.log(setMapToObj(obj))


