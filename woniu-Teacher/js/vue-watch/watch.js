class watcher {
  constructor (opts) {
    this.$data = opts.data
    this.$watch = opts.watch

    for (let key in opts.data) {
      this.seData(key, opts.data[key])
    }
  }
  seData (_key, _val) {
    // Object.defineProperty(this)this把上下文指向当前对象
    Object.defineProperty(this, _key, {
      get: function () {
        return this.$data[_key]
      },
      set: function (val) {
        // 保存老值
        const oldVal = this.$data[_key]
        if (oldVal === val) return val
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' &&(
          this.$watch[_key].call(this, val, oldVal)
        )
        return val
      }
    })
  }
}

// let vm = new watcher({
//   data: {
//     a: 0,
//     b: 'hello'
//   },
//   watch: {
//     a (newVal, oldVal) {
//       console.log(newVal, oldVal)
//     }
//   }
// })

// setTimeout(() => {
//   vm.a = 1
// }, 1000);