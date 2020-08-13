// 节流
const throttle = (func, delay) => {
  // 上一次执行函数的时间
  let lastTime = 0

  return function(...args) {
    let now = +new Date()
    // 判断下一次的点击当前的时间 和 上一次点击的时间差 是否大一dealy
    if(now - lastTime > delay) {
      lastTime = now
      func.apply(this, args)
    }
  }
}


var app = document.getElementById('app')
app.addEventListener('click', throttle(handle, 1000))

function handle() {
  console.log('handle')
}


const throttle = (func, delay) => {
  let flag = true
  return function(...args) {
    if(!flag) {
      return 
    }
    flag = false
    setTimeout(() => {
      flag = true
      func.apply(this, args)
    })
  }
}

