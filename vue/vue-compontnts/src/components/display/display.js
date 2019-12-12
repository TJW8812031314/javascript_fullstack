// const code = `<template>
//                 <div>
//                     <input v-model="message">
//                     {{ message }}
//                 </div>
//                 </template>
//                 <script>
//                 export default {
//                     data () {
//                         return {
//                             message: ''
//                         }
//                     }
//                 }
//                 </script>`
// export default code;

const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
function str32 (len = 32) {
  let str = ''
  let maxPos = $chars.length
  for(let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}
console.log(str32())