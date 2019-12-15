#!/usr/bin/env node
const command = require('commander')
const path = require('path')
const fs = require('fs')
const ora = require('ora')
const glob = require('glob')
const downloadRepo = require('download-git-repo')
const inquirer = require('inquirer')
// 静态站点生成 hexo
const metalSmith = require('metalsmith')
const handlebars = require('handlebars')

const args = command.parse(process.argv).args
let projectName = args[0]
let list = glob.sync('*')

// 判断是否有相同的文件名
if(list.length) {
  if(list.filter(fileName => {
    console.log(fileName)
    return fileName == projectName
  }).length !== 0) {
    console.log(`项目名已存在${projectName}`)
    return;
  }
}

// 下载
go();
function go() {
  const loading = ora('正在下载项目').start();
  download()
  .then(() => {
    loading.succeed();
    // 一问一答
    return inquirer.prompt([
      //用户输入
      {
        name: 'projectName',
        message: '项目名称',
        default: projectName
      },
      // 用户选择
      {
        name: 'css',
        message: '使用css预处理器',
        choices: ['less', 'stylus'],
        default: 'test',
        type: 'list'
      },
      // 确认
      {
        name: 'router',
        message: '使用 router',
        type: 'confirm'
      }
    ])
  })
  .then(meta => {
    console.log(meta)
    return new Promise((resolve, reject) => {
      // current work dir
      // 
      metalSmith(process.cwd())
      .metadata(meta)
      .clean(false)
      .source(`${projectName}/.temp`)
      //生成的目的地
      .destination(`${projectName}`)
      // 插件
      .use((file, metas, done) => {
        // console.log(file)
        const fileName = Object.keys(file)
        fileName.forEach(fname => {
          const content = file[fname].contents.toString()
          const compliedContent = handlebars.compile(content)(meta)
          // 替换 内容
          file[fname].contents = Buffer.from(compliedContent)

        })
        done()
      })
      .build((err) => {
        if (!err) {
          resolve()
        } else {
          reject()
        }
      })
    })
    .then(res => {
      // console.log(res)
    })
  })
  .catch(() => {
    loading.fail();
  })

}
function download() {
  // git clone 下载git
  return new Promise((resolve, reject) => {
    downloadRepo('github:MengZhaoFly/my-cli-test#master',
    `${projectName}/.temp`, {clone: true}, (err) => {
      if(err) {
        reject(err)
      } else {
        resolve(`${projectName}/.temp`)
      }
    })
  })
}