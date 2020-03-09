import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)// store已经能知道笔记本中记过的两个笔记

export default store