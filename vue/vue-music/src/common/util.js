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
// findIndex 获取索引，查找数组下标
export function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}