// 如何理解原型，如何理解原型链
// https://www.jianshu.com/p/7d58f8f45557

let obj = { age: 26 }

// let obj = new Object({ age: 26 })

// 每个js对象都有 __proto__属性，指向原型
// 为了让我们访问到对象的内部属性 [[prototype]]
Object.prototype = xxx

obj.__proto__

// 原型的constructor属性，指向构造函数，构造函数又通过prototype属性指回原型

// 原型链：
// 就是多个对象通过 __proto__ 的方式连接起来

obj.prototype // 能拿到原型链上面的东西


// 总结：
// Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
// function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
// 函数的 prototype 是一个对象
// 对象的 __proto__ 属性指向原型，__proto__将对象和原型连接起来组成原型链
