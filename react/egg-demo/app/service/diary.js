'use strict';

const Service = require('egg').Service;

class DiarySerivice extends Service {
  async list() {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.select('diary')
      return result
    } catch {
      console.log(error)
      return null
    }
  }
  async add(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.insert('diary', params)
      return result
    } catch {
      console.log(error)
      return null
    }
  }
  async update(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.update('diary', params)
      return result
    } catch {
      console.log(error)
      return null
    }
  }
  async diaryById() {// 获取日记详情接口

  }
}

module.exports = DiarySerivice