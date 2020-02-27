import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

// react router 其中包含三种类型，1. 路由组件 2. 路由匹配组件 3. 导航组件
// 路由组件： BrowserRouter HashRouter
// 路由匹配组件： Route Switch
// 导航组件： Link

function Home () {
  return <h2>Home</h2>
}

function About () {
  return <h2>About</h2>
}

function Topic({ match }) {
  console.log(match.params.id)
  return <h2>Requested Param: { match.params.id}</h2>
}

// class Topics extends React.Component {
//   constructor (props) {
//     super(props)
//   }
// }

function Topics (props) {
  console.log(props)
  const { match } = props
  // react 二级路由
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. state</Link>
        </li>
      </ul>
      {/* Topics的一个二级组件 */}
        <Route path={`${match.path}/:id`} component={Topic}/>
        {/* Topics的另一个组件 */}
        <Route 
        exact 
        path={`${match.path}`}  
        render={() => <h3>Please select a topic.</h3>}/>
    </div>
  )
  
}

function Header () {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  )
}

function App () {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  )
}

export default  App