var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 同一链接数据的方法
let allServices =  {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if(err) {
          reject(err) 
        }else {
          // 查询
          connection.query(sql, values, (err, rows) => {
            if(err) {
              reject(err)
            }else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}
// 读取所有 user 表数据，测试数据链接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}
// 用户登入需要匹配
// 用户登录
// 用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}


module.exports = {
  getAllusers,
  userLogin
}