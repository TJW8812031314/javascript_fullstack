const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default;// 节点遍历
const babel = require('@babel/core')

// 分析入口文件
const rukoufenxi = (entry) => {
  const content = fs.readFileSync(entry, "utf-8")
  // console.log(content)
  const ast = parser.parse(content, {// 抽象语法树
    sourceType: 'module'
  })
  // console.log(ast.program.body)节点
  const yilai = []
  traverse(ast, {
    ImportDeclaration({ node }) {
      // console.log(node)
      const dirname = path.dirname(entry)
      const newFile = './' + path.join(dirname, node.source.value)
      // console.log(newFile)
      yilai[node.source.value] = newFile
    }
  })
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  })
  // console.log(code)
  return {
    entry,
    yilai,
    code
  }
}

const info = rukoufenxi("./src/index.js")
console.log(info)