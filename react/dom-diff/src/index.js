import { createElement, render, renderDom } from './element.js'
import diff from './diff'
import patch from './patch'

let vertualDom1 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('li', {class: 'item'}, ['ccc'])
])

let vertualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item'}, ['111']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('div', {class: 'item'}, ['3333'])
])
// 如果平级元素有互换，那会导致重新渲染-------react源码不会，因为key这个唯一标识
// 新增节点也不会被更新
// index

let el = render(vertualDom1)
renderDom(el, window.root)

let pacthes = diff(vertualDom1, vertualDom2)
// 给元素打补丁，重新更新新视图
patch(el, pacthes)

// 将虚拟dom转化为真实dom，渲染到页面上
// let el = render(vertualDom)
// renderDom(el, window.root)

// console.log(el)
// console.log(vertualDom)

// DOM Diff 用来比较两个虚拟的dom区别，比较两个对象的区别，
// dom diff作用，根据两个虚拟对象创建出补丁，描述改变的内容，将补丁用来更新dom

