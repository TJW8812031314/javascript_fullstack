// es6 语法的特性 ? 如何给一个不懂的人讲symbol, 应用场景有哪些？

// 1. symbol 是es6新增的一种原始数据类型
// 2. symbol 用来声明唯一值

// 3. 使用symbol 来做为对象属性名，(将一些不需要对外操作和访问的属性使用symbol来定义)
//      使用symbol来代替常量，
//      使用symbol定义类的私有属性

// let o = {
//   abc: 123,
//   'Hello': 'world'
// }
// console.log(Object.keys(o));
// for in

// obj['abc']
// obj['Hello']

const PROP_NAME = Symbol()
const PROP_AGE = Symbol();

let obj = {
//   [PROP_NAME]: '一斤代码'
  [Symbol('name')]: '一斤代码',
  age: 18, 
  title: 'xxxx'

}

obj[PROP_NAME] = 18

console.log(Object.keys(obj));

// const TYPE_AUDIO = 'AUDIO'
// const TYPE_VIDEO = 'VIDEO'
// const TYPE_IMAGE = 'IMAGE'

// function handleFileTesource(resource) {
//   switch(resource.type) {
//     case TYPE_AUDIO:
//       playAudio(resource)
//       break
//     case TYPE_VIDEO:
//       playVideo(resource)
//       break
//     case TYPE_IMAGE:
//       previewImage(resource)
//       break
//     default:
//       throw new Error('Unknown3edcx type of resource')
//   }
// }

const PASSWORD = Symbol()

class Login {
  constructor(username, password) {
    this.username = username
    this[PASSWORD] = password
  }

  checkPassword(pwd) {
    return this[PASSWORD] === pwd
  }
}

// export default Login;
// import Login from "./2"

const login = new Login('admin', '123456')

// console.log(login.checkPassWord('12356'))

console.log(login.PASSWORD);// no
console.log(login[PASSWORD]) // yes