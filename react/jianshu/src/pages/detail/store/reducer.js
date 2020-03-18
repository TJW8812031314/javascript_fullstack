import { fromJS } from 'immutable'
import { constants } from '.'
// import * as constants from './constants'
// immutable.js
// facebook
// immutable对象

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHENGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state

  }
}