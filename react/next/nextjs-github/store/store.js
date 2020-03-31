import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
  count: 0
}

const userInitialState = {
  username: '',
  age: 18
}

const ADD = 'ADD'
function counterReducer (state = initialState, action) {
  console.log(state.count)
  switch (action.type) {
    case ADD:
      return { count: state.count + ( action.num || 1 ) }
    default:
      return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'

function userReducer (state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name
      }
    default:
      return state
  }
}

const allReducer = combineReducers({
  couter: counterReducer,
  user: userReducer
})

//{counter: initialState, user: userInitialState}

const store = createStore(
  allReducer, 
  {
    couter: counterReducer,
    user: userReducer
  },
  applyMiddleware(ReduxThunk)
)

// action creatore
function add(num) {
  return {
    type: ADD,
    num
  }
}

function addAsync(num) {
  return (dispatch) => {
    setTimeout(() => {
      return {
        type: ADD,
        num
      }
    }, 1000)
  }
}

// console.log(store.getState())
store.dispatch(add(3))
// console.log(store.getState())

store.subscribe(() => {
  console.log('changed' + store.getState())
})

store.dispatch(addAsync(5))

store.dispatch({ type: UPDATE_USERNAME, name: 'jiawen' })

export default store