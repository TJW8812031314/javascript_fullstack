import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Wirter from './components/Wirter'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillMount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload-images.jianshu.io/upload_images/7412180-6c01336a234d470b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/273/format/webp" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Wirter />
        </HomeRight>
        {
          this.props.showScroll
          ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> 
          : null
        }
      </HomeWrapper>
    )
  }
}
const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    action(dispatch)
  },
  changeScrollTopShow (e) {
    // console.log(e)
    if(document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
    // console.log(document.documentElement.scrollTop)
  }
})

export default connect(mapState, mapDispatch)(Home)