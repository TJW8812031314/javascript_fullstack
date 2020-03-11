// Redux = flux = Reduce
import React, { Component } from 'react'
// import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index.js'
// import { CHABNGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUi.js'

// store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelet = this.handleItemDelet.bind(this)
    store.subscribe(this.handleStoreChange)// 只要仓库数据发生变化
  }

  componentDidMount () {
    const action = getTodoList()
    store.dispatch(action)// 因为此刻的store已经集成了thunk的功能， 所以支持dispatch一个函数这个函数会自动执行

  }
  handleInputChange (e) {
    // const action = {
    //   type: CHABNGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)// 让管理员听到这句话
  }
  
  handleStoreChange () {
    console.log('store changed')
    this.setState(store.getState())
  }

  handleBtnClick () {
    // const action = {
    //   type: ADD_TODO_ITEM,
    //   value: this.state.inputValue
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelet (index) {
    console.log(index)
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleStoreChange = {this.handleStoreChange}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        list = {this.state.list}
        handleItemDelet = {this.handleItemDelet}
      />
    )
  }
}

export default TodoList