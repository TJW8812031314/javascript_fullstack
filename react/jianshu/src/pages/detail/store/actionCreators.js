import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
  type: constants.CHENGE_DETAIL,
  title: title,
  content: content
})

export const getDetail = () => {
  return (dispatch) => {
    axios.get('api/detail.json').then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content))
    })
  }
}