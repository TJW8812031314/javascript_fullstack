import React, { Component } from 'react'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => { this.accout = input }} />
            <Input placeholder="密码" type="password" ref={(input) => { this.password = input }} />
            <Button onClick={() => this.props.login(this.accout, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }

  }
}

const mapState = (state) => ({
  loginState: state.login.get('login')
})

const mapDispatch = (dispatch) => ({
  login(accoutElem, passwordElem) {
    const action = actionCreators.login(accoutElem.value, passwordElem.value)
    action(dispatch)
    //  dispatch(actionCreators.login(accoutElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login)