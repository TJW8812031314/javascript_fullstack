// == 和 ==== 有什么区别？


// 判断 X 和 y 是否相同，需要走那些流程：

// 对于 == 来说：
// 1. 首先判断两者类型是否相同，相同的话比较大小
// 2. 类型不同的话，那么就会进行类型转换
// 3. 会先判断是否在对比 null 和 undefined，是的话就会返回true
// 4. 判断两者类型是否为 string 和 number，是的话就会将字符串转化为number
    1 == '1' // true  '1' => 1
// 5. 判断其中一方是否为 Boolean，是的话就会把boolean转换为number再进行判断
    '1' == true // true => 1  '1' => 1  // true
// 6. 判断其中一方是否为object，且另一方为string，number或者symbol，是的话就会将object转换为原始类型再进行比较
    '1' == {name: 'xyz'} // {name: 'xyz'} => '[object Object]' => '1' == '[object Object]' //false

    1 == {name: 'xyz'}  //  => '[object Object]'// false
    1 == '[object Object]'
    1 == Number('[object Object]')
    1 == NaN // false

// [] == ![] 是true 还是 false 为什么？
  // 1. ！优先级大于 == 
  // ![] => !true => false
  // [] == 0
  // "" == 0 // Number('') => 0



// 对于 === 来说，除了值相等 && 类型也要相等










