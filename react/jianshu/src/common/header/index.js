import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem ClassName="left" className="active">首页</NavItem>
          <NavItem ClassName="left">下载APP</NavItem>
          <NavItem ClassName="right">登入</NavItem>
          <NavItem ClassName="right">
            <span className="icon iconfont">&#xe602;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.state.focused}
              classNames="slide"
            >
              {/* {slide-enter slide-enter-active slide-exit slide-enter-end} */}
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe606;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="icon iconfont">&#xe600;写文章</span>
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>

    )
  }
}

export default Header