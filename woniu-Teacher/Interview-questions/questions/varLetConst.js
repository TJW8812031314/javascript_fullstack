// es6
// 什么是变量提升？ 什么是暂时性死区？ var let const 的区别？


// hoisting(提升)
// console.log(a) // undefinde
// var a = 1

// // 提升的是声明
// var a
// console.log(a) // undefinde
// a = 1

// var a = 10 // var a  a = 10
// var a      // var a
// console.log(a) // 10 先提升再赋值

// var a
// var a 
// a = 10

// 不仅变量会提升，函数也会提示
// console.log(a) // f a() {}
// function a() {} // 函数的提升优先于变量的提升
// var a = 1

// var a
// function a() {}
// console.log(a)
// a = 1


// let const 不会挂载到window上
// var a = 1
// let b = 1
// const c = 1
// console.log(window.b) // undefined
// console.log(window.c) // undefined


// function test() { // 暂时性死区，访问受限
//   console.log(a) //  Cannot access 'a' before initialization
//   let a   
// }
// test()


// 为什么存在提升？
function test1() {
  test2() //
}

function test2() {
  test1()
}

test1()
// 提升的根本原因是为了解决函数间的根本调用

// 总结：
// 1. 函数的提升优先于变量的提升，函数提升会把整个函数挪到作用域 顶部，变量提升只会把声明挪到作用域顶部。
// 2. var 存在提升, 能在声明之前可以使用，let、 const  因为暂时性死区的原因不能再声明之前使用
// 3. var 在全局作用域下声明变量会导致变量挂载在window上，其他两者不会。
// let 和 const 作用域基本一致，但是后者声明的变量不能再次赋值
