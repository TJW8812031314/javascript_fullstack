## 显隐式原型
- Function._proto_ === object.prototype // false
## 构造函数return是对象才会影响值
function Persion(name) {
  this.name = name
  return 1
}
let p = new Persion('wn')
console.log(p)// wn

- for in
1. index 是索引， 不能直接进行几何运算
2. 遍历的顺序可能不是实际的数组的内部顺序进行的
3. 使用 for in 会遍历数组的所有可枚举属性，包括原型

- for of
1. 遍历的是数组的元素
2. 遍历不包括数组的原型和索引


 ## set类数组 支持使用forEach 
1. 对于set而言 NaN === NaN
2. 对于set而言空对象是不相等的
