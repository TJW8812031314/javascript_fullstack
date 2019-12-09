const debounce = (fn, delay) => {
  let timer;
  // if(timer) {
  //   clearTimeout(timer)
  // }
  return (...agrs) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 防止修改this作用域
      fn.apply(this, ...agrs)
    }, delay);  
  }
}

// test = function () {
//   console.log(123)
// }
// debounce(test, 500)

data :{
  
}
// methods: {
//   function a () {
//     ajax.get(
//       {
//         success:function() {
//           // this.b() // 会导致b函数里面的this作用域失效
//           // 应该改成 this.b.call(this)
//         }
//       }
//     )
//   }
//   function b () {
//     this.name = 'wn'
//   }
// }
