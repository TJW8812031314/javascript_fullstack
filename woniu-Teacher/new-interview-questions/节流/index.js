// 节流：在规定的时间内只触发一次

// function throttle(fn, delay) {
//   let timer = null
//   let falg = true
//   return function() {
//     if(!falg) {
//       clearTimeout(timer)
//     }

//     timer = setTimeout(() => {
//       fn();
//       falg = true
//     }, delay);
//     falg = false
//   }
// }

function throttle(fn, delay) {
  let prev = Date.now();
  return function() {
    let now = Date.now()
    let context = this
    let arg = arguments
    if(now - prev >= delay) {
      fn.apply(context, arg)
      prev = Date.now()
    }
  }
}