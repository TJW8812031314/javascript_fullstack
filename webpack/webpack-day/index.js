import a from './a'
import b from './b'
// import pic from './img/test.jpg'
// import './index.css'
// import axios from 'axios'


// var img = new Image()
// img.src = pic
// img.classList.add('pic')
// var root = document.getElementById('root')
// root.appendChild(img)

// // 既然wepack默认只认识js模块，那么遇到非js模块怎么办
// // loader
b()
a()
if (module.hot) {
  module.hot.accept("./a", () => {
    console.log('有更新了')
    document.body.removeChild(document.getElementById('number'))
    a()
  })// 监听a文件
}

// HMR 默认对css模块支持较好，对js模块需要额外的处理，
// 通过module.hot.accept来对需要更新的模块进行监听


// axios.get('/api/info').then((res) => {
//   console.log(res)
// })

// // console.log(pic)
// function lm() {
//   console.log('welcome to lm')
// }

// lm()




// import './index.css'
// var btn = document.createElement("button")
// btn.innerHTML = "新增"
// document.body.appendChild(btn)

// btn.onclick = function() {
//   var div = document.createElement("div")
//   div.innerHTML = "item"
//   document.body.appendChild(div)
// }



