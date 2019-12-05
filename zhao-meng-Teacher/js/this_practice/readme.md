## 类数组 转 真数组
1. Array.from(类数组) 
let arr1 = Array.from(arguments)
2. 借用数组的slice 方法  
let arr2 = Array.prototype.slice.call(arguments)
3. 解构出来然后再放入一个数组中
let arr3 = [...arguments]

## this
修改this作用域
bind() 只绑定this作用域不调用
call() 直接调用
apply()
this的绑定优先级  obj.fn < call/apply/bind < new

## new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即{}）      // 1. 生成一个 {}
2. 链接该对象（即设置该对象的构造函数）到另一个对象 // 2. 继承 {} ._proto_ = Go.prototype
3. 将步骤1新创建的对象作为this的上下文 
4. 如果该函数没有返回对象，则返回this // 返回一个 {}