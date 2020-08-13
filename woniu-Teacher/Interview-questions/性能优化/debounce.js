// 防抖

// 传入需要防抖的函数
// 设定的时间
const debounce = (func, delay) => {
  // 缓存一个定时器
  let timer = null

  return function(...args) {
    if(timer) {clearTimeout(timer)}

    timer = setTimeout(() => {
      func.call(this, args)
    }, delay)
  }
}


var app = document.getElementById('app')
app.addEventListener('click', debounce(handle, 1000))

function handle() {
  console.log('handle')
}