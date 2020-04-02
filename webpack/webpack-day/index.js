import a from './a'
import b from './b'
import pic from './img/test'

// 既然wepack默认只认识js模块，那么遇到非js模块怎么办
// loader
a()
b()

function lm() {
  console.log('welcome to lm')
}

lm()