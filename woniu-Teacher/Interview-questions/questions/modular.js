// 模块化
// 为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特色？

// 模块化可以给我们带来什么好处：
// 1. 解决命名冲突
// 2. 提高复用性
// 3. 提高代码可维护性


// 立即执行函数
(function(globalVariable) {
  globalVariable.test = function() {}
    // ... 声明各种变量、函数 都不会污染全局作用域
    let a = ''
})(globalVariable)

// AMD 和 CMD CommonJS

// AMD
define(['./a', './b'], function(require, factory) {
  // 'use strict';
  // 加载模块完毕可以使用
  a.do()
  d.do()
});

// CMD
define(function(require, factory) {
  // 加载模块
  // 可以吧 require 写在函数体的任意位置实现延迟加载
  var a = require('./a')
  a.doSomthing()
});


// CommonJs

module.exports = { // a.js
  a: 1
}

// or
exports.a = 1

var module = require('./a.js') // b.js
module.a // 1

module.exports = { // a.js
  a: 1
}
var module = {
  id: 'xxx',
  exports: {}
}

var exports = module.exports
var load = function (module) {
  // 导出东西
  var a = 1
  module.exports = a
  return module.exports
}

// ES Module
// 1. CommonJS ⽀持动态导⼊，也就是 require(${path}/xx.js)，后者⽬前不⽀持，但是已有提案
// 2. CommonJS 是同步导⼊，因为⽤于服务端，⽂件都在本地， 同步导⼊即使卡住主线程影响也不⼤。⽽后者是异步导⼊，因 为⽤于浏览器，需要下载⽂件，如果也采⽤同步导⼊会对渲染 有很⼤影响
// 3. CommonJS 在导出时都是值拷⻉，就算导出的值变了，导⼊ 的值也不会改变，所以如果想更新值，必须重新导⼊⼀次。但 是 ES Module 采⽤实时绑定的⽅式，导⼊导出的值都指向同 ⼀个内存地址，所以导⼊值会跟随导出值变化 
// 4. ES Module 会编译成 require/exports 来执⾏的

// 引入
import {xxx} from './a.js'
import xxx from './a.js'

// 导出模块API
export function a() {}
export default function() {}