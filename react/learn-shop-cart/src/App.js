import React, { Component } from 'react';
import logo from './logo.svg'

//函数型组件传递props
function WelCome1(props) {
return <div>hello , {props.name}</div>
}

export default class App extends Component {
  constructor(props) {
    super(props)
    //初始状态
    this.state = {
      count: 0,
      date: new Date()
    }
  }
  // 组件渲染完成之后
  componentDidMount() {
    this.timer = setInterval(() => {
      // 更新状态
      this.setState({
        date: new Date(),
        count: this.state.count + 1
      })
    }, 1000)
    // 注意：setState这是一个异步的方法
    this.setState((prevState, prevProps) => ({
      count: prevState.count + 1
    }), () => {
      console.log(this.state.count)
    })
  }
  // 组件渲染完成之前
  componentWillMount () {
    clearInterval(this.timer)
  }

  formatName(user){
    return user.firstName + ' ' + user.lastName
  }

  render() {
    const name = '家文'
    const jsx = <p>hello , 蜗牛</p>
    return (
      <div>
        App组件
        <h1>{this.state.count}</h1>
        <p>{this.formatName({firstName: 'tom', lastName: 'jerry'})}</p>
        <img src={logo} style={{width: '100px'}} className='img'/>
        {jsx}
        <WelCome1 name="tom"/>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
