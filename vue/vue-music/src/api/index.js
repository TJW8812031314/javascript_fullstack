import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

// axios配置 请求不超过10s
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = 'https://www.fastmock.site/mock/87e839620ff1b8e14fcd454066c0051c/news'

// 判断返回状态 res响应拦截
// Promise 两个参数reject resolve
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  alert('网络异常')
  return Promise.reject(error)
})

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export function postData(url, param) {
  return new Promise((resolve, reject)) => {
    axios.post(url, {
      data: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  // 用户登入
  login (params) {
    fetchGet('./login', params)
  },
  // banners
  BannerList () {
    return fetchGet('/banner')
  },
  // 歌单
  DiscList (params) {
    return fetchGet('/top/palyList', params)
  },
  HotSearchkey () {
    return fetchGet('/search/hot')
  },
  MusicSearch (params) {
    return fetchGet('/search', params)
  },
  // 根据ID获取歌曲的url
  MusicUrl (id) {
    return fetchGet('/song/url', {id})
  }
  getList(gameid) {
    return postData('/list', gameid)
  }

}