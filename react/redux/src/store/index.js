import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhanders = 
  window._REDUX_DEVTOOS_EXTENSION_COMPOSE__ ? 
    window._REDUX_DEVTOOS_EXTENSION_COMPOSE__() : compose;

const enhancer = composeEnhanders(
  applyMiddleware(thunk)
)

const store = createStore(
  reducer,
  enhancer
)// store已经能知道笔记本中记过的两个笔记

export default store