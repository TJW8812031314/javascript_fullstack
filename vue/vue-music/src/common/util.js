export function debounce (func, delay) {
  let timer
  // ...args参数统称
  return function (...args) {
    if (timer) {
      // 清除timer
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // 绑定this作用域，防止修改
      func.apply(this, args)
    }, delay);
  }
}