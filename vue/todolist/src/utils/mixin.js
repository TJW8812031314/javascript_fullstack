const mixin = {
  data() {
    return {
      hi: 'hello mixin'
    }
  },
  created() {
    console.log('mixin中也有生命周期的概念')
  },
  methods: {
    hello() {
      console.log(this.hi)
    }
  }

}
 export default mixin