import * as types from '../types'
import {findIndex} from '@/common/util'

const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  currentIndex: -1,
  favoriteList: [],
  palyHistory: []
}

const mutations = {
  [types.SET_PLAYLIST] (state, playlist) {
    state.playList = playlist
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}

const actions = {
  // 选择音乐播放
  selectPlaySong({commit, state}, song){
    let playList = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查询当前列表只能是否有插入的歌曲并返回其索引
    let fpIndex = findIndex(playList, song)
    // 如果已经包含这首歌
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      // 如果不存在加到最前面
      playList = [song, ...playList]
      currentIndex = 0
    }

    commit(types.SET_PLAYLIST, playList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
  },
  addplayList({commit, state}, song) {
    let playlist = [...state.playList.slice(), song]
    if (playlist.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)

    }
    commit(types.SET_PLAYLIST, playlist)
  }
}

const getters = {
  // 取到播放列表
  currentSong: state => {
    return state.playList[state.currentIndex] || {}
  },
  playList: state => state.playList
}
export default {
  state,
  getters,
  mutations,
  actions
}