// 数据变化了， 视图就会更新
let olderArrayPrototype = Array.prototype

let proto = Object.create(olderArrayPrototype)

Array.from(['push', 'shift', 'unshift', 'pop']).forEach(method => {
  proto[method] = function() {
    olderArrayPrototype[method].call(this, ...arguments)
    updateView()
  }
})

function observer(target) { // 观察者
  if(typeof target !== 'object' && target == null) {
    return target
  }
  if(Array.isArray(target)) {
    // 重写数组的原型
    // Object.setPrototypeOf(target, proto)
    target.__proto__ = proto
  }
  for(let key in target) {
    definReactive(target, key, target[key])
  }


}

function definReactive(target, key, value) {
  if(typeof value == 'object' && value !== null) {
    observer(value)
  }
  Object.defineProperty(target, key, {
    get() {
      return value
    },

    set(newVal) {
      if(newVal !== value) {
        value = newVal
        updateView()
      }
    }
  })
}


function updateView() {
  console.log('视图更新')
}

let data = {
  name: 'wn',
  age: {
    num: 18
  },
  like: {
    a: {
      hb: 'running'
    }
  },
  job: ['coder', 'driver']
}
observer(data) // data 被劫持

// data.name = '凯凯'
// data.age.num = 19
// data.like.a.hb = 'reading'

// data.job.length = 3
// data.job.push('h')
// data.sex = 'boy'
// console.log(data.name)