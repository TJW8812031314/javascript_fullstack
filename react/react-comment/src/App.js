import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput';

class App extends React.Component {
  // 静态属性
  state = {
    commentList: []
  }

  onPublish = (userName, comment) => {
    console.log(userName, comment);
    let c = { userName, comment }
    // 不可变数据
    // let obj = {}; let obj1 = obj; obj1.name = 'li'// 可变
    // let obj1 = Object.assign({}, obj) // 不可变
    let list = this.state.commentList.slice(0)
    list.push(c)
    // this.state.commentList = list
    this.setState({
      commentList: list
    })
  }

  handelDel = (event) => {
    // Del i
    // data-i = i
    console.log(event)
    const i = parseInt(event.target.dataset.i)
    // this.state.commentList.splice(0, 1);// vue删除法
    const list = this.state.commentList.slice(0)
    list.splice(i, 1)
    this.setState({
      commentList: list
    })
  }

  render() {
    return (
      <>
        <CommentInput onPublish={this.onPublish}/>
        {/* <commentList /> */}
        { this.state.commentList.length }
        { this.state.commentList && this.state.commentList.map(
          (c, i) => {
            return (
              <li key={i}>
                {c.userName}: {c.comment}
                <button data-i = {i} onClick={this.handelDel}>删除</button>
              </li>
            )
          }
        )}
      </>
    )
  }
}

export default App;
