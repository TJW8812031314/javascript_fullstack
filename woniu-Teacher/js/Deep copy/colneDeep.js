// 实现浅拷贝
function clonShallow(surcce) {
  var target = {}
  for (var key in surcce) {
    if(Object.prototype.hasOwnProperty.call(surcce, key)) {
      target[key] = surcce[key]
    }
    // target[key] = surcce[key]
  }
  return target
}
let a = {
  name: 'wn',
  book: {
    title:"You Don't Konw Js",
    price: '45'
  }
}
let b = clonShallow(a)
a.name = '蜗牛'
a.book.price = '55'
console.log(b)

// 实现深拷贝
function clonDeep(surcce) {
  if (typeof surcce != 'object') {
    return surcce
  }
  var target = Array.isArray(surcce) ? [] : {}
  for (var key in surcce) {
    if(Object.prototype.hasOwnProperty.call(surcce, key)) {
      // typeof 可以判断对象
      if (typeof surcce[key] === 'object') {
        target[key] = clonDeep(surcce[key])
      } else {
        target[key] = surcce[key]
      }
    }
    // target[key] = surcce[key]
  }
  return target
}

let a = {
  name: 'wn',
  book: {
    title:"You Don't Konw Js",
    price: '45'
  }
}
let b = clonDeep(a)
// let b = clonShallow(a)
a.name = '蜗牛'
a.book.price = '55'
console.log(b)

let a = [0, '1', [2, 3]]
let b = clonDeep(a)
a[0] = 9
a[2][0] = 4

// 用栈实现深拷贝
function clonDeep2(x) {
  const root = {}

  // 栈 用数组定义一个栈 pop尾部出栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
  }
]
while (loopList.length) {
  const node = loopList.pop()
  const parent = node.parent
  const key = node.key
  const data = node.data

  let res = parent //{}
  // 初始化赋值目标， key为undefined的话拷贝到父元素， 否则拷贝到子元素
  if (typeof key !== 'undefined') {
    res = parent[key] = {}
  }
  for (let k in data) {
    if (data.hasOwnProperty(k)) {
      if (typeof data[k] === 'object') {
        // 进行下一次循环
        loopList.push({
          parent: res,
          key: k,
          data: data[k]
        })
      }else{
        res[k] = data[k]
      }
    }
  }
}
return root
}

let a = {
  name: 'wn',
  book: {
    title:"You Don't Konw Js",
    price: '45'
  }
}
let b = clonDeep2(a)
a.name = 'ffhb'
a.book.price = '55'
console.log(b)