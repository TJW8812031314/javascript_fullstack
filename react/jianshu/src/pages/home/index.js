import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Wirter from './components/Wirter'

class Home extends Component {

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
export default Home