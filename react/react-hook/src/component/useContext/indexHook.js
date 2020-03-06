// useContext 让父子组件传递变得更加简单
import React, {useState, createContext, useContext } from 'react'

const CountContext = createContext()

function Example () {
  const [ count, setCount] = useState(0)

  return (
    <div>
      {/* <Test></Test> */}
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
      <CountContext value={count}>
        <Counter />
      </CountContext>
    </div>
  )
}

function Counter () {
  const count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

// function Test () {
//   return (
//     <div>
//       <p>{num}</p>
//     </div>  
//   )
// }

export default Example