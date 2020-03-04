import React from 'react'

const wihtMouse = (Component) => {
  return class extends React.Component {
    state = {x: 0, y: 0}

    handleMouseMove = (event) => {// 箭头函数没有this作用域
      console.log(event)
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }

    render () {// {...this.props}将高阶函数的props附带赠与子组件
      return (
        <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state}/>
        </div>
      )
    }
  }
}

// 定义一个纯函数无状态的组件
const App = (props) => {
  const {x, y} = props.mouse
  return (
    <div style={{height: '100vh'}}>
      <h1>The mouse: position is({x},{y})</h1>
    </div>
  )
}


const AppWithMouse = wihtMouse(App)// 高阶组件替组件干活
export default AppWithMouse