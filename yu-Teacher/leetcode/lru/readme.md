-es5 
js中 函数 是一等公民
js过去 没有class 关键字
function  LRUCache
类的构造函数
定义一个类
new LRUCache 可以被实例化
new 过程发生了什么？
生成了一个对象 {}   object
内存之中空的 {}  new
加上属性 构造函数 this

面向对象  类 ，构造函数  方法 属性
    class    constructor
function A   函数本身   prototype  this
函数具有protoype属性
火车头  constructor    prototype对象
基于原型的面向对象
-任何函数都有prototype属性  它的值是对象，
key=>function( ) {}
-任何对象都是_proto_, 指向构造函数的 prototype属性
JS 的面向对象，类和实例的关系， 不是父子关系，没有血缘基于原型的
-new的过程 构造函数 被执行， 创造一个this 指向对象
加了属性  对象的_proto_属性  找到原型链上的方法
cache instanceof LRUCache
Js 中没有类的概念，LRUCache 也是对象

-es6 7 8 9
                 2
1                1
[1   2 }         0
get(1)
[2 1]
-装  容量
-push  最后一个元素是 最重要的
-[0] 元素可以被删除的
-空间还有吗？
-get 在哪？放到最后面来 在原位置删除 放到最后
#   p r o t o t y p e -  
 #   p r o t o t y p e -  
 #   p r o t o t y p e -  
 