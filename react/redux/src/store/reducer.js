import { CHABNGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// state 指的是store里面上一次存储的数据 
// action 用户传过来的那句话

export default (state = defaultState, action) => {
  if (action.type === CHABNGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))// 深拷贝
    newState.inputValue = action.value
    return newState // reducer 有一个限制可以接收state， 但是不能修改state
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)// action.value
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)// action.value
    newState.inputValue = ''
    return newState
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data// action.value
    newState.inputValue = ''
    // return newState
  }

  console.log(state, action)
  return state
}