import React, { useState } from 'react'
// useState 就是一个hook
function Example () {
  const [ count, setCount ] = useState(0)
  // const [ count, name, age, setCount, setName, setAge ] = useState(0, '蜗牛', 10)

  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]

  // const [ name, setname ] = useState(0)
  // setCount == this.setState({ count: 'number'})

  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

// useState 多状态
function Example2 () {
  // const [ count, name, age, setCount, setName, setAge ] = useState(0, '蜗牛', 10)
  const [ age, setAge, ] = useState(18)
  // if (showSex) {
  //   const [ sex, setSex ] = useState('男')
  //   showSex = false
  // }

  const [ sex, setSex ] = useState('男')
  const [ work, setWork] = useState('前端程序员')

  // react 是如何保证useState找到对应的state
  // react 是根据useState出现的顺序来确定的
  // react hooks不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序

  return (
    <div>
      <p onClick={() => {setAge(age + 1)}}>蜗牛 今年：{age}</p>
      <p>性别： {sex}</p>
      <p>工作是： {work}</p>
    </div>
  )

}



export default Example2

// hooks 本质上就是一类特殊的函数 目的就是不再写class，让function一统江湖