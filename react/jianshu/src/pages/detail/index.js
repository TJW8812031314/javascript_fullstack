import React, { Component } from 'react'
import { DetailWrapper, Hearder, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {
  componentDidMount () {
    this.props.getDetail()
  }
  render() {
    return (
      <DetailWrapper>
        <Hearder>{this.props.title}</Hearder>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWrapper>
    )
  }
}
const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    let action = actionCreators.getDetail()
    action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(Detail)