import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  render() {
    const { loginState } = this.props
    if (loginState) {
      return (
        <div>写文章页面</div>
      )
    } else {
      return <Redirect to="/login" />
    }

  }
}

const mapState = (state) => ({
  loginState: state.login.get('login')
})


export default connect(mapState, null)(Login)