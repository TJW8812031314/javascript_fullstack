import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'
const composeEnhanders = 
  window._REDUX_DEVTOOS_EXTENSION_COMPOSE__ ? 
    window._REDUX_DEVTOOS_EXTENSION_COMPOSE__() : compose;

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhanders(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)


const store = createStore(
  reducer,
  enhancer
)// store已经能知道笔记本中记过的两个笔记

sagaMiddleware.run(todoSagas)

export default store