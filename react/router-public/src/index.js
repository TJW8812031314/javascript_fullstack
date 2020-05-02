import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from './react-router-dom'
import Home from './Home'
import User from './User'
import Profile from './Profile'

export default class APP extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/profile" component={Profile}></Route>
        </div>
      </Router>

    )
  }
}

ReactDOM.render(<APP />, window.root)