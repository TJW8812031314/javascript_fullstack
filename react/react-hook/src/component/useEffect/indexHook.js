// 副作用  hooks模式下状态（state）发生变更的时候提供给我们做额外操作的地方

import React, { useState, useEffect } from 'react'

function Example () {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`componentDidMount => 你点击${count}了次`)
  })

  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default Example
// 1. react 首次渲染和之后的每一次渲染都会调用useEffect函数
// 2. useEffect里面定义的函数都是异步执行的，它不会阻碍浏览器更新视图