## 防抖 debounce
-高阶函数 输入是函数 输出也是函数
funciton debounce(fun) {
  let time
  return function(e) {
    clearTimeout()
    time = setTimeout(() => {
      fun(e)
    },1000)
  }
 }
function buy(e) {
  console.log(e，1234)
}
- e参数是回调函数参数event
 buyButton.addEventListener('click', function (event) {无名方法

 })