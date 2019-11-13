# throttle 节流
- 节流：减缓事件触发的频率，时间间隔触发
- 使用时间戳
- 使用_.throttle(函数, 时间)
- 使用函数式编程
  function myThrottle(func, wait) {
    return function() {
    }
  }