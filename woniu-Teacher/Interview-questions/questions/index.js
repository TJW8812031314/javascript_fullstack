// js原始数据类型
  // JS 中的6种原始值，分别是：

  // Boolean
  // null
  // undefined   undefined.toString()
  // Number
  // String
  // Symbol (es6新增的)

  // Object

  // '1'.toString()

  // 0.1 + 0.2 !== 0.3

  // function numbersequal(a,b){ 
  //   return Math.abs(a-b)<Number.EPSILON;
  // } 
  // var a=0.1+0.2， b=0.3;
  // console.log(numbersequal(a,b)); //true

  // "1" + "2" == "12"

  // typeof null // object

// 问：对象类型和原始类型不同之处是什么？ 函数参数是对象会发生什么？

// let bar = {}
// const foo = []
// // #001
// const bar = foo // 复制了foo的变量地址(指针)
// bar.push(1)
// console.log(bar, foo)// 1, 1  指向同一个地址

function test(persion) {
  persion.age = 26
  persion = {
    name: 'wn',
    age: 30
  }
  return persion
}
const p1 = {
  name: '蜗牛',
  age: 25
}

const p2 = test(p1)
console.log(p2) // {name: 'wn', age: 30}
console.log(p1) // {name: '蜗牛', age: 26}

// 答：原始类型存储的是值, 对象类型存储的是地址（指针），计算机会在内存中帮我们开辟一个空间来存放值，
//     当我们需要去取这个空间的时候，这个空间会拥有一个指针

    // - 首先， 函数传参是传递对象指针的副本
    // - test的这个参数person，此时是一个镜像p1，也就是说与p1有一份一模一样的指针
    // - 当我们从新为person分配一个对象时，出现分歧
    // - 从新赋值，导致persion拥有一个新的地址（指针），也就和p1再无瓜葛