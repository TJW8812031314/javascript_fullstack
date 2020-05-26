const express = require('express')
const router = require('./router/index')

const app = express()

app.use('/', router)
// function myLogger(req, res, next) {
//   console.log('mylogger')
//   next()
// }
// app.use(myLogger)

// app.get('/', function (req, res) {
//   // res.end('hello node')
//   throw new Error('error....')
// })

// function errorHandle(err, req, res, next) {
//   console.log(err)
//   res.status(500).json({
//     error: -1,
//     msg: err.toString()
//   })
// }

// app.use(errorHandle)

const server = app.listen(5000, () => {
  const { address, port } = server.address()
  console.log('Http Server is runing on http://%5:%s', address, port)
})