function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
      console.log('A')
    }, 1000)
  })
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
      console.log('B')
    }, 500)
  })
}

function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3)
      console.log('C')
    }, 1500);
  })
}


function name() {
  console.log('蜗牛')
}

// A().then(B).then(C).then(name)

// Promise.all([A(), B(), C()]).then(name)

// Promise.race([A(), B(), C()]).then(name) 当一个函数依赖另一个函数的结果时

// let p = new Promise((resolve, reject) => {

// })