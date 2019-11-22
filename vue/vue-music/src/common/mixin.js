import {mapActions} from 'vuex'
export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQureyChange (query) {
      // 去掉空格trim()
      this.query = query.trim()
      console.log(this.query)
      // 看戏效果
      // setTimeout(() => {this.saveSearch()}, 1000);
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ])
  }
 }