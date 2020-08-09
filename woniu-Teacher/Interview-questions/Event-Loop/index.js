
// setTimeout(() => {
//   console.log(2)
// }, 0)

// // Promise 本身是异步方法
// let p = new Promise((resolve, reject)  => {
//   resolve(1)
//   console.log(1)
// })


// 进程 和 线程 的区别 ？ Js的单线程带来了什么好处？

// 本质上来说， 进程 和 线程 都是CPU工作时间片 的一个描述


// 进程: 描述了CPU在进行指令及加载和保存上下文文件所需要的时间
// 线程: 描述了执行一段指令所需要的时间

// 线程是互斥的

// JS单线程带来的好处:
// 可以节省内存， 节约上下文切换时间，没有锁的问题的好处


// 执行栈 (什么是执行栈？)
// function foo(b) {
//   // var a = 5;
//   // return a * b + 10
//   throw new Error('error')
// }
// function bar(x) {
//   // var y = 3
//   // return foo(x*y)
//   foo()
// }

// bar(6)


// 可以认为 执行栈 是一个存储函数调用的栈结构


// 浏览器中的 Event Loop
// 异步代码的执行顺序？ 解释一下 Event Loop？

// 当我们执⾏ JS 代 码的时候其实就是往执⾏栈中放⼊函数，
// 那么遇到异步代码的时候该 怎么办？其实当遇到异步的代码时，
// 会被挂起并在需要执⾏的时候加⼊到 Task（有多种 Task） 队列中。
// 一旦执行栈为空， Event Loop就会从Task队列中拿出需要执行的代码并放到执行栈中
// 所以，本质上来说，JS中的异步其实还是同步


// 任务源可以分为 微任务 (microtask) 和 宏任务 (macrotask)。
// 在ES6的规范当中，microtask称为 jobs，macrotask称为 task

console.log('script start') // 1

async function async1() {
  // 第五步的时候回到这个地方的Promise里面执行resolve函数，这会把resolve丢到微任务中
  await async2() // await 可看成是让出线程的标志
  // Promise.resolve(返回值).then(
      console.log('async1 end') // 5
  // )
  
}

async function async2() {
  console.log('async2 end') // 2
}

async1()

setTimeout(function() {
  console.log('setTimeout') // 8
}, 0)

new Promise((resolve, reject) => {
  console.log('Promise') // 3
  resolve()  // 这里是同步的，要注意立即执行
})
.then(function() {
  console.log('promise1') // 6
})
.then(function() {
  console.log('promise2') // 7
})
console.log('script end')// 4

// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

// Event Loop 执行顺序:
// 1. 先执行同步代码，这属于宏任务
// 2. 执行栈为空之后，查询是否有异步代码需要执行
// 3. 执行所有的微任务
// 4. 执行完所有的微任务后，如果有必要的话会渲染页面
// 5. 开始下一轮 Event Loop， 执行宏任务当中的异步代码， 也就是setTimeout中的回调

// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     }) 
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })

// process.nextTick(function() {
//     console.log('6');
// })

// new Promise(function(resolve) {
  // setTimeout(() => {
  //   console.log('7');
  //   resolve();
  // })
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })
// console.log(13)
// 1 13 6 2 4 7 9 11 3 10 5 8 12


// 微任务: process.nextTick, promise, MutationObeserver

// 宏任务: script, setTimeout, setInterval, setImmediate, I/O, UI rendering

// 浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务


// node 中的 Event Loop 和 浏览器的有什么区别？ process.nextTick执行顺序

// node中的event loop分6个步骤 // https://www.jianshu.com/p/deedcbf68880
// 1. 
// 2. 
// 3. 
// 4. 
// 5. 
// 6. 

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0);
// setTimeout(() => {
//   console.log('setTimediate')
// });

// 首先setTimeout(fn, 0) === setTimeout(fn, 1) 源码当中决定了

// const fs = require('fs')
// fs.readFile(__dirname, () => { // fs.readFile 就称为I/O
//   // 也就是说这两个函数写在了I/O回调中
//   setTimeout(() => {
//     console.log('setTimeout')
//   }, 0);
//   setTimeout(() => {
//     console.log('setTimediate')
//   });
// })


// // 以上说的都是宏任务

// // 对于微任务来说，它会在以上6个阶段的 每个阶段 完成之前去清空微任务
// setTimeout(() => {
//   console.log('timer2')
// }, 0)
// Promise.resolve().then(() => {
//   console.log('Promise1')
// })

// 在node异步中，微任务一定比宏任务先执行



// process.nextTick
// 这个函数其实 是独⽴于 Event Loop 之外的，它有⼀个⾃⼰的队列，
// 当每个阶段完 成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数， 
// 并且优先于其他 microtask 执⾏。

setTimeout(() => {
  console.log('timer2')

  Promise.resolve().then(() => {
    console.log('Promise1')
  })

}, 0)
new Promise((resolve, reject) => {
  console.log('promise')
  resolve(1)
}).then(() => {
  console.log('then')
})

process.nextTick(() => {
  console.log('nextTick')

  process.nextTick(() => {
    console.log('nextTick')

    process.nextTick(() => {
      console.log('nextTick')

      process.nextTick(() => {
        console.log('nextTick')
      })
    })
  })
})
