import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Wirter from './components/Wirter'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount () {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action)
      console.log(result)
    })
  }
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload-images.jianshu.io/upload_images/7412180-6c01336a234d470b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/273/format/webp" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Wirter />
        </HomeRight>
      </HomeWrapper>
    )
  }
} 
const mapDispatch = (dispatch) => ({
  changeHomeData (action) {
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)