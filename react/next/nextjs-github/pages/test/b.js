import React, { useState, useEffect } from 'react'

class MyCount extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval)
    }
  }

  render () {
    return <span>{this.state.count}</span>
  }

}

function  MyCountFunc() {
  const [count, setCount] = useState(0)// 返回[a, b]
  // const [name, setName] = useState('wn')

  useEffect(() => {// 组件卸载时 执行return
    const 
    interval = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <span>{count}</span>
}
export default MyCountFunc