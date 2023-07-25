// 2.0 默认递归，改变数组的length属性是无效的，对象不存的属性是不能被劫持的
let toProxy = new WeakMap() //原对象
let toRaw = new WeakSet() // 代理过的对象： 原对象

function isObject(val) {
  return typeof val == 'object' && val != null
}

function reactive(target) {
  // 创建响应式对象
  return createReactiveObject(target)
}

function createReactiveObject(target) {
  if(!isObject(target)) { // 如果不是对象，直接返回
    return target
  }

  let proxy = toProxy.get(target)
  if(proxy) {
    return
  }

  let baseHandler = {
    get(target, key, receiver) {
      console.log('获取', key)
      let result = Reflect.get(target, key, receiver)

      // return isObject(result) ? reactive(result) : result // 递归
      return result
    },
    set(target, key, value, receiver) {
      let hadKey = target.hasOwnProperty(key)
      let oldvalue = target[key]

      if(!hadKey) {
        console.log('新增')
      }else if(oldvalue !== value) {
        console.log('修改')
      }
      // 将代理好的对象内部的值改动
      let res = Reflect.set(target, key, value, receiver)
      return res
    }
  }

  let observed = new Proxy(target, baseHandler) // 代理target

  toProxy.set(target, observed)
  toRaw.add(observed, target)

  return observed
}

let proxy = reactive({
  name: '慧慧',
  age: {
    n: 18
  }
})

// proxy.age = 17
// proxy.sex = 'girl'

proxy.age.n = 1
console.log(proxy.age.n)


// proxy.age.n = 17
// proxy.age.g = '0'
// console.log(proxy.age.n)
// let obj = {
//   name: '慧慧',
//   age: 18
// }

// let proxy = reactive(obj)
// reactive(obj)
// reactive(obj)
// reactive(obj)
