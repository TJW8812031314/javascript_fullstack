-new 的过程
1. 创建一个空对象 {}
2. new functionA (){}
函数运行时， 会产生几个必有的对象
动态决定 
this {}<= this.name
functionA 不是以new的方式来运行时？ 普通函数，this指向window
启动严格模式。 ' 'use strict'
this undefined
arguments 
两口子 constructor  prototype
JS没有类 person 对象(函数)
woniu._proto_ === person.prototype  //true

this 当作为对象的方法被执行时 this指向对象
woniu.sing();
new person  this 指向实例，
person() 普通函数被运行时 this指向Undefined | window

person.pototype._proto_ === Animal.pototype

- 面向对象的做法，三种
construtor + prototype
es6  class 关键字
object.create(原型对象)
-手写代码是js 考试方式
object.create()
function create(obj){
    function F() {}//空函数
    F。prototype = obj；
    return new F();
}