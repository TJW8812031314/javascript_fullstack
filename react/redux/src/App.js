// Redux = flux = Reduce
import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index.js'
// store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)

  }
  
  render () {
    return (
      <div style={{marginLeft: '10px', marginTop: '10px'}}>
        <div>
          <Input value={this.state.inputValue} placeholder="todo info" style={{width: '300px'}}/>
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList