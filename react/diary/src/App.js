import React from 'react';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const RouterMap = () => {
    return <Router>
      {/* Switch 和 js 中 switch差不多，只做一次，匹配到了就不再进行了 */}
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
}
export default RouterMap;
