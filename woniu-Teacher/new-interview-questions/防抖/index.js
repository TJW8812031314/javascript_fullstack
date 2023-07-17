// 防抖： 在规定的时间内没有触发第二次， 则执行
function debounce(fn, delay, ) {
  let timer = null
  return function() {
    let that = this
    // let arg = arguments

    clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(that, [...arg]);
    }, delay);
  }
}