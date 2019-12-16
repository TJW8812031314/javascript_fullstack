## call apply bind
都可以 绑定 this

call / apply: 调用函数
```js
function foo(a, b) {
  //foo()
  //foo.call(this, a, b)
  //foo.call(this, [a, b])
}
```
函数式编程：
柯里化(curry): 管理函数输入(参数分批给)
bind的第一个参数为null时，this指向全局对象
test() 方法用于检测一个字符串是否匹配某个模式
.slice(start,end)：方法可从已有数组中返回选定的元素，返回一个新数组，包含从start到end（不包含该元素）的数组元素。
.splice()：该方法向或者从数组中添加或者删除项目，返回被删除的项目。（该方法会改变原数组）