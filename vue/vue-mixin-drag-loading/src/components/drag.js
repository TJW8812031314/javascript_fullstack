let dragMixin = {
  currentTarget: null,
  methods: {
    move (event) {
      const x = event.clientX
      const y = event.clientY
      this.currentTarget.style.transform = `translate(${x}px, ${y}px)`
    },
    leave () {
      // 移除鼠标事件
      document.removeEventListener('mousemove', this.move)
    },
    start (event) {
      this.currentTarget = event.currentTarget;
      document.addEventListener('mousemove', this.move);
      document.addEventListener('mouseleave',this.leave);
    }
  }
}
export default dragMixin