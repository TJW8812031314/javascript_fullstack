// 原型继承  和  Class继承
// 把父类的原型放到子类的原型链上

// 原型继承是如何实现继承？Class是如何实现原型？Class本质是什么？

// class 本质是函数
// class Person {}
// console.log(person instanceof Function) // true

// 继承的本质就是复制，即重写原型对象。代之以一个新类型的实例

// 原型链继承
// 缺点：
// 1. 只能继承原型链上的方法和属性，不能继承实例上的方法和属性
// function SuperType() {
//   this.property = true
// }
// SuperType.prototype.getSuperValue = function() {
//   return this.property
// }

// function SubType() {
//   this.subproperty = false
// }

// // console.log(new SuperType())
// SubType.prototype = new SuperType()
// SubType.prototype.getSuperValue = function() {
//   return this.subproperty;
// }

// var instance = new SubType()
// console.log(instance.getSuperValue()) // false

// 想让 B 继承 A，只需要看A的原型链上有什么东西，然后吧B的原型重写成A的原型链




// 借用构造函数继承
// 缺点：
// 1. 只能继承父类的实例和方法，不能继承到原型上的属性和方法。
// 2. 无法实现复用，每个函数都有父类实例的一个副本，互不影响
// function SuperType() {
//   this.color = ['red', 'green', 'blue']
// }
// function SubType() {
//   SuperType.call(this)
// }
// var instance1 = new SubType()
// instance1.color.push('balck')
// console.log(instance1.color) // [ 'red', 'green', 'blue', 'balck' ]

// var instance2  = new SubType()
// console.log(instance2.color) // [ 'red', 'green', 'blue']




// 组合继承 (最常见的继承方式)
// function Parent(value) {
//   this.val = value
// }
// Parent.prototype.getValue = function() {
//   console.log(this.val)
// }


// function Child(value) {
//   Parent.call(this, value)
// }

// Child.prototype = new Parent()

// const child = new Child(1)
// child.getValue() // 1


// 寄生组合继承
// 该方式是为了优化 组合继承 中的缺点： 继承父类函数时调用的构造函数
// function Parent(value) {
//   this.val = value
// }
// Parent.prototype.getValue = function() {
//   console.log(this.val)
// }


// function Child(value) {
//   Parent.call(this, value)
// }

// Child.prototype = Object.create(Parent.prototype,  // {...Parent.prototype}
//   {
//     constructor: {
//       value: Child,
//       enumerable: false,
//       writable: true,
//       consfigurable: true
//     }
// })
// let pro = Object.create(Parent.prototype) // 创建父类原型的一个副本
// pro.constructor = Child // 弥补因重写原型而失去的默认constoructor属性
// Child.prototype = pro // 将新创建的对象赋值给子类原型

// const child = new Child(1)
// child.getValue() // 1



// Class 继承

class Parent {
  constructor(value) {
    this.val = value

  }
  getValue() {
    console.log(this.val)
  }
}

class Child extends Parent{
  constructor(value) {
    super(value) // 等同于Parent.call(this, value)
    this.val = value
  }
}

let child = new Child(2)
child.getValue()
console.log(child instanceof Parent)
