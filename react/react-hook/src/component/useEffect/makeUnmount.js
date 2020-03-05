// componentWillUnmount 组件卸载之前生命周期
// useEffect 实现componentWillUnmount (解绑副作用)

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Example () {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`useEffect => 你点击${count}了次`)
    return () => {
      console.log('----------')
    }
  },[count])

  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/List">列表</Link>
          </li>
        </ul>
        <Route eacth path="/" component={Index}></Route>
        <Route path="/List" component={List}></Route>
      </Router>
    </div>
  )
}

function Index () {
  useEffect (() => {
    console.log('useEffect => 这里是index组件')
    return () => {
      console.log('你离开了index页面')
    }
  }, [])
  
  return <h2>旅梦开发团</h2>
}

function List () {

  useEffect (() => {
    console.log('useEffect => 这里是list组件')
  },[])

  return <h2>list-page</h2>
}

export default Example