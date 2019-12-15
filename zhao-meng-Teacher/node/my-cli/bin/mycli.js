#!/usr/bin/env node
// shebang #！ 用于启动该文件的一个环境
// node app.js
// live-server
// vue init abc 子命令
// vue --version 选项
const command = require('commander');
// co
command.version('1.0.0')
.usage('<command> [项目名称]')
.command('init', 'init project')
.command('hello', 'hello')
//parse node的进程命令  init webpack --version参数
.parse(process.argv)