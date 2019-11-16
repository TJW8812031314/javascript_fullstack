<template>
  <div class="count">
    {{myCount}}
    <!-- vuex 自带的$store不是引入的 -->
    <!-- <buttton @click="$store.commit('add', 20)">+</buttton>
    <button @click="$store.commit('reduce')">-</button> -->
    <button @click="addAction(10)"></button>
    <button @click="reduceAction"></button>
    {{getCount}}
    <!-- {{$store.state.count}} -->
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  mounted () {
    // this.myCount = this.$store.state.count
  },
  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
    },

//   computed: {
//     myCount () {
//       this.myCount = this.$store.state.count
//     }
//   }
// 调用数据的写法
// 1：computde: mapState(['count'])
  computed: mapState({
  // 2：myCount: state => state.count
    myCount (state) {
      return $state.count
    },
    ...mapGetters([
      'getCount'
    ])
  })
  // 3:computed: {
  //   ...mapState{[
  //    'count'
  //   ]}
  //  }

}

</script>

<style>

</style>