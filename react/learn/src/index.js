//入口文件
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// class App extends React.Component {
//   render () {// jsx, props
//     return <div>
//       hello { this.props.name }, I am { 9 + 9 } year old
//     </div>
//   }
// }

// state 相当与vue 的data
class Counter extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    //初始化构造器时设置内部状态，num为1
    this.state = {
      num: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // 生命周期方法，组件渲染完成
  componentDidMount() {
    console.log('componentDidMount 函数出发')
  }

  // 生命周期方法 避免组件重复或者无意义渲染
  shouldComponentUpdate(nextPorps, nextState) {
    // console.log(nextPorps, nextState)// nextState最新的值
    if (nextState.num%2) {
      return true
    }else {
      return false
    }
  }

  handleClick () {
    console.log(123)
    this.setState({
      num: this.state.num +1
    })
  }
  render () {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.querySelector('#root'))
