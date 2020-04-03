import a from './a'
import b from './b'
import pic from './img/test.jpg'
import './index.css'
import axios from 'axios'


var img = new Image()
img.src = pic
img.classList.add('pic')
var root = document.getElementById('root')
root.appendChild(img)

// 既然wepack默认只认识js模块，那么遇到非js模块怎么办
// loader
a()
b()

axios.get('/api/info').then((res) => {
  console.log(res)
})

console.log(pic)
function lm() {
  console.log('welcome to lm')
}

lm()