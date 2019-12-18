## weakSet
- weakSet 只能存放对象 弱引用
- weakSet 可以接收一个数组作为参数，该数组的所有的成员，都会自动成为weakSet实例对象
但是传过来的数组成员只能是对象
- WeakSet 没有seize属性，所有它也不能遍历

## map 类对象
自带.set()方法设置或修改实力当中已有的值 .get()获取 map.size数据长度

1. 实际上不仅仅是数组 任何具有Iterator接口，只要数组中的每一成员都是双元素的数据结构， 都可以作为Map的参数
所以Set，Map都可以用来生成新的Map

2. key值不能重复 找不到key值undefined

3. 相同的值在不同对象的引用，Map结构视为两个键

## WeakMap
1. WeakMap 只接受对象作为键名，不接受其他类型的值作为键名
2. WeakMap 弱引用只是键名，不是键值
3. WeakMap 没有size, forEach， clear

