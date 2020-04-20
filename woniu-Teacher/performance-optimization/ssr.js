import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import APP from './APP'

const app = express()

const RDom = renderToString(<APP />)

const Page = `
  <html>
    <head>
      <title></title>
    </head>
    <body>
      <span>ssr</span>
      ${RDom}
    </body>
  </html>
`

app.get('/index', (req, res) => {
  res.send(Page)
})

const server = app.listen(8000)