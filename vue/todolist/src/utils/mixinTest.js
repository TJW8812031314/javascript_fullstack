export const toggle = {
  data() {
    return {
      isShowing: true
    }
  },
  created() {
    console.log('mixin')
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing
    }
  }
}