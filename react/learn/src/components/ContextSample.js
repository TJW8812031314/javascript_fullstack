// 组件跨层级的上下文通信
import React, { Component } from 'react'

// 1. 创建上下文
const Context = React.createContext()

const state = {
  name: '恭喜你中了一等奖',
  sayHi () {
    console.log(this.name)
  }
}
// (Comp) => {
//   (props) => {

//   }
// }
const withProvider = Comp => props => (
  <Context.Provider value={state}>
  <Comp {...props} />
  </Context.Provider>
)

const withConsumer = Comp => props => (
  <Context.Consumer>
  {/* {必须嵌套一个函数} */}
  {value => <Comp {...props} value={value} />}
  </Context.Consumer>
)

@withConsumer
class Inner extends Component {
  render () {
    console.log('Inner')
    return (
      <div>
        {this.props.value.name}
      </div>
    )
  }
}

@withProvider //
class ContextSample extends Component {
  render() {
    console.log('ContextSample')
    return (
      <div>
        <Inner></Inner>
        {/* <C></C> */}
      </div>
    )
  }
}

// class C extends Component {
//   render () {

//   }
// }

export default ContextSample