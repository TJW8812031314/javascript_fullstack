// 类型转换

// 要明确知道，在JS类型转换只有三种情况，分别是：
// 1. 转换为布尔值
// 2. 转换为数字
// 3. 转换为字符窜

// https://www.cnblogs.com/jc2182/p/11582448.html (js类型转换表)

// 转Boolean的情况，除了 undefined， null, false, NaN, '',0, -0,其他所有的值都为true

// 对象转为原始类型

// 对象在转换类型时，回调用内置的[[ToPrimitive]]函数，对于该函数来说，转换类型的算法逻辑如下

//  - 如果已经是原始类型，那就不用转换
//  - 调用 x.valueOf(), 如果转换为基础类型，就返回转换的值
//  - 调用 x.toString(), 如果转换为基础类型，就返回转换的值
//  - 如果都没有返回原始类型 就会报错

// let a = {
//   valueOf() {
//     return 0
//   },
//   toString() {
//     return '1'
//   },
//   [Symbol.toPrimitive] () {
//     return 2
//   }
// }
// 1 + a // 3


// 四则运算的加法中特点：
// 1. 运算中存在一方为字符串，那么就会把其他方法也转化为字符串进行相加
// 2. 如果一方不是字符串或数字，那么将它转换为 数字 或者 字符串 进行相加减
// 1 + '1' // '11'
// true + true // 2
// 4 + [1, 2, 3]  => "4" + "1, 2, 3"// '41, 2, 3'

// 'a' + + 'b' => 'a' +  (+'b') // aNaN



// 除了加法运算符，其他的只要一方是数字，另一方就会被转换为数字
// 4 * '3' // 12
// 4 * []  // 0
// 4 * [1, 2] // NaN

// 比较运算

// 1. 如果是对象，就通过 toPrimitive 转换对象
// 2. 如果是字符串，就通过 unicode 字符索引来比较

// let foo = {
//   valueOf() {
//     return 0
//   },
//   toString() {
//     return '1'
//   },

// } 

// foo > -1 // true
