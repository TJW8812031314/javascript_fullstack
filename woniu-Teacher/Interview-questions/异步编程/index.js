// 并发 和 并行的区别

// 并发，是宏观概念，我有任务A和任务B，在一段时间内通过任务切换完成了两个任务
// 并行，是微观概念，假设CPU有两个核心，那么我们就可以同时完成任务B和任务A，同时完成多个任务的情况就称为并行




// 回调函数 (callback)
// 什么是回调函数？回调函数有什么缺点？如何解决回调地域问题？
// ajax(url, () => {
//   // 处理逻辑
//   ajax(url, () => {
//     // 处理逻辑
//     ajax(url, () => {
//       // 处理逻辑
//     })
//   })
// })

// function first() {
//   ajax(url, () => {
//     secondAjax()
//   })
// }

// function secondAjax() {
//   ajax(url, () => {
//     //逻辑处理
//   })
// }

// 回调函数的缺点
// 1. 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
// 2. 嵌套函数一多，就很难处理错误


// Generator
// 你理解的Generator是什么？
// function *foo(x) {
//   let y = 2 * (yield(x+1))
//   let z = yield(y / 3)
//   return (x + y + z)
// }
// let it = foo(5)
// // foo(1)
// console.log(it.next()) // { value: 6, done: false }
// // 传入的参数等于生一个一yield的返回值
// console.log(it.next(12)) // { value: 8, done: false }
// console.log(it.next(13)) // { value: 42, done: true }


// function *fetch() {
//   yield ajax(url, () => {})
//   yield ajax(url1, () => {})
//   yield ajax(url2, () => {})
// }
// let it = fetch()
// let result1 = it.next()
// let result2 = it.next()
// let result3 = it.next()


// Promise
// Promise的特点是什么？ 分别有什么优缺点？ 什么是Promise链？Promise构造函数执行和then函数执行又什么区别？
// 三种状态:
// 1. 等待中{pending}
// 2. 完成 {resolved}
// 3. 失败 {rejected}

// new Promise((resolve, reject) => {
//   console.log('new Promise')
//   resolve('success')

//   // // 无效
//   // reject('reject')
// })
// console.log('finish')

// Promise.resolve(1)
//   .then(res => {
//     console.log(res) // 1
//     // resolve(2)
//     // then当中使用return的话，return的值会Promise.resolve() 包装
//     return 2
//   })
//   .then((res) => {
//     console.log(res)
//   })


  // ajax(url)
  //   .then(res => {
  //     console.log(res)
  //     return ajax(url1)
  //   })
  //     .then(res => {
  //       return ajax(url2)
  //     })
  //       .then(res => {
  //         console.log(res)
  //       })


// async 及 await 的特点是什么？ 他们的优点和缺点分别是什么？await原理是什么？

// 一个函数如果加上了async，那么该函数就会返回一个Promise

// async function test() {
//   // return '1'
//   let value = await sleep()
// }

// function sleep() {}

// console.log(test())

// function test() {
//   return new Promise((resolve, reject) => {
//     resolve('1')
//   })
// }

// async function name() {
//   // 这里的代码没有依赖性的话，完全可以使用Promise.all的方式

//   // 这里的代码有依赖性的话，其实就是解决回调地域的例子
//   await fetch(url)
//   await fetch(url1)
//   await fetch(url2)
// }

// let a = 0
// let b = async () => {
//   a = a + await 10 // await 内部实现了generator， generator会保留堆栈中的东西，所以 a = 0会被保留下来
//   console.log('2', a) // '2', 10
// }

// b()
// a++
// console.log('1', a) // '1', 1 await本身是异步操作

// await 就是generator加上Promise后的一个语法糖，内部实现自执行generator



// 常用的定时器函数
// function A(params) {
//  // 1s
// }
// function B(params) {
//   // 0.5s
// }

// setTimeout(() => {
//   B()
// }, 1000)



// setTimeout、setInterval、 requestAnimationFrame 各有什么特点？

// setTimeout(() => {
//   console.log('setTimeout')
// }, 1000)
let period = 60 * 1000 * 60 * 2
let starTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval

function loop() {
  count++

  // 代码执行所消耗的时间
  let offset = new Date().getTime() - (starTime + count * interval)
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(diff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / (1000)
  let sCeil = Math.ceil(s)
  let sFloor = Math.floor(s)

  // dedao下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log(`时: ${h}, 分：${m}, 毫秒：${s}, 秒向上取整: ${sCeil}, 代码执行的时间: ${offset}, 下次循环间隔: ${currentInterval}`)

  setTimeout(loop, currentInterval)
}

setTimeout(loop, currentInterval)



// setInterval
// function demo() {
//   setInterval(() => {
//     console.log(2)
//   }, 1000)
//   sleep()
// }
// demo()


// requestAnimationFrame 自带节流功能，基本可以保证 16.6秒内只执行一次
function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}

let a = 0
setInterval((timer) => {
  console.log(1)
  a++
  if(a === 3) cancelAnimationFrame(timer)
}, 1000);