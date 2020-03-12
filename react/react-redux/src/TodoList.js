import React, { Component } from 'react';
// import store from './store/'
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }


  render () {
    return (
      <div>
        <div>
          <input onChange={this.props.changeInputValue} value={this.props.inputValue}/>
          <button >提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {// 把store.dispatch 映射到props上
  return {
    changeInputValue (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.valur
      }
      console.log(e.target.value)
      dispatch(action)
    }
  }
}
// conect 是链接
// TodoList 和 store 做链接
// mapStateToProps 的参数就是 store 该方法会帮助我们把store映射到当前的Props

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);