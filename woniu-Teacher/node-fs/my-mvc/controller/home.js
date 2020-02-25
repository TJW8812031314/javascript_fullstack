module.exports = app => ({
  index: async app => {
    // ctx.body = 'Ctrl Index'
    app.ctx.body = await app.$model.user.findAl()
  },
  detail: app => {
    app.ctx.body = 'Ctrl Detail'
  }
})