import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
const getters = {
  getcount: (state) => {
    return state.count += 100
  }
}
// 用来带调用mutations，使之成为异步
const actions = {
  addAciton (context, status) {
    context.commit('add', status)
  },
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    }, 3000)
    console.log('我比reduce先执行')
  }
}
export default new Vuex.Store({
  // 抛出
  state,
  mutations,
  actions
})