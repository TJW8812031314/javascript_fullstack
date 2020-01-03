import { add, reduce } from './math.js'
// reduce 有必要 存在 最终的dist 文件里面吗

import { includes } from 'lodash'
// import { includes } from 'underscore'
// babel-plugin-import
// 把上面的语法转化为下面的语法
// import includes from 'lodash/includes'

console.log(add(1, 2))
console.log(reduce(3, 2))
console.log(includes([1, 2], 1))