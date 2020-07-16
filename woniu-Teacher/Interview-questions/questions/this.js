// this 代表一个指针
// 如何正确判断 this？ 箭头函数 this 是什么

function foo() {
  console.log(this.a)
}
// var a = 1
// // foo() // 1

// const obj = {
//   a: 2,
//   foo: foo
// }

// obj.foo() // 2


const c = new foo()// foo{}
//  new操作符做了什么
// 1. 创建一个新的空对象
// 2. 将构造函数的作用域赋值给新的对象（this指向这个新对象）
// 3. 执行构造函数中的代码(为这个新对象添加属性)
// 4. 返回新对象


// 1. 对于直接调用foo来说，不管foo函数写在什么地方，this都是指向window
// 2. 对于obj.foo()来说， 谁调用函数谁就是this，所以场景2中，this 就是obj对象
// 3. 对于new的方式来说，this会被永远绑定在 c 上面， 不会被任何方式所改变



function a() {
  // console.log(this)

  return () => {
    return () => {
      console.log(this)
    }
  }

}
// let b = a()()
console.log(a()()())


// function abc() {
//   // this.a = 123
// }

// abc = () => {
//   // this  xx
// }

// var a = function www() {
// // this....
// }
var a = () => {}
var b = {}
a.bind(b)

// 谁最后调用它，它就指向谁， 箭头函数本身没有this
// 箭头函数中的this只取决于包裹箭头函数的上一层普通函数的this
// 另外：在箭头函数中使用 bind 这类是无效的

// call, apply, bind
// a.call(b)

let a = {}
let fn = function() {
  console.log(this)
}

fn.bind().bind(a)()
// fn.bind().bind(a)()等于 fn2
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}

fn2()

// 不管我们给函数bind几次，fn中的this永远由第一个bind决定，所以结果永远是window

// // // 当多种规则同时出现的时候，this的作用域指向， 由各个规则的优先级决定，this的指向
// new > bind一类 > obj.foo() > 直接调用


// 箭头函数中的this一旦被绑定，就不会被任何方式所改变
