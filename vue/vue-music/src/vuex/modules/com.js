import * as types from '../types' // 取出types所有的抛出

const state = {
  showSidebar: false,
  searchHistory: ['许嵩', 'data']
}
const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state) {
    state.searchHistory = status
  },
  [types.COM_DELETE_SEARCH_HISTORY] (state, index) {
    // 删除
    state.searchHistory.splice(index, 1)
    console.log(index)
  },
  [types.COM_CLEAR_SEARCH_HISTORY] (state) {
    state.searchHistory = []
  }
}
const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit,state}, query) {
    // 累加搜索历史 query新的值
    let searchHistory = [query, ...state.searchHistory.slice()]
    // 数组去重 去掉重复历史
    searchHistory = [...new Set(searchHistory)]
    // 提交这个方法
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  },
  // 删除仓库历史
  deleteSearchHistory ({commit}, index) {
    commit(types.COM_DELETE_SEARCH_HISTORY, index)
  },
  clearSearchHistory ({commit}, status) {
    commit(types.COM_CLEAR_SEARCH_HISTORY, status)
  }
}
const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

export default {
  state,
  getters,
  mutations,
  actions
}