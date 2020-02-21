// // Hook 他可以不编写class的情况下使用state内部的状态和react

// // 使用state Hook
// import React, { useState, Component, useEffect } from 'react'

// class HooksTest extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
// }
// export default function HooksTest () {
//   // useState(initiaState) 接收初始状态， 返回一个状态变量和它的更新
//   // 声明一个新的叫做 "count" 的 state 变量
//   const [count, steCount] = useState(0)
//   // 数据获取，设置订阅，以及手动更改React组件Dom -- 负作用
//   useEffect(() => {
//     document.title=`您点击了${count}次`
//   })
//   return (
//     <div>
//       <p>You clicked {count}</p>
//       {/*  调用setCount，修改count状态*/}
//       <button onClick={() => stateCount(count + 1)}>click me</button>
//     </div>
//   )
// }