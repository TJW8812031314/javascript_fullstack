import { fromJS } from 'immutable'
// immutable.js
// facebook
// immutable对象
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会焦点',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/7065556-dfcbaacad4d010e3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp'
  },
  {
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/17559136-4ae8f7d911619005?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp'
  }
]
})

export default (state = defaultState, action) => {

  return state
}