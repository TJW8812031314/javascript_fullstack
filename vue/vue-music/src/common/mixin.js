import {mapActions, mapGetters} from 'vuex'

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
      // this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
      this.selectPlaySong(song)
      // 为了看效果
      this.addplayList()
    },
    ...mapActions([
      'addplayList',
      'selectPlaySong',
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ])
  }
 }

 export const playerMixin = {
   computed: {
    ...mapGetters([
      'currentSong',
      'playList'
    ])
   },
   methods: {

   }
 }