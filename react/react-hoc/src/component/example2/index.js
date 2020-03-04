import React, { Component } from 'react'

// Hoc高阶组件
function Hoc(wrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ''
      }
    }
    render () {
      return (
        <wrappedComponent/>
      )
    }
  }
}

class Example extends Component {
  render () {
    return (
      <input />
    )
  }
}
// const Example = Hoc(Example)
export default Example