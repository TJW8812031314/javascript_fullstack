// import React from 'react'

import Router from 'next/router'
import store from '../store/store'


const events = [
  // 'routeChangeStart',
  // 'routeChangeComplete',
  // 'routeChangeError',
  // 'beforeHistoryChange',
  // 'hashChangeStart',
  // 'hashChangeComplete'
  store
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}
events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})


export default () => {

  // function gotoTestB() {
  //   Router.push({
  //     pathname: '/test/b',
  //     query: {
  //       id: 2
  //     }
  //   }, '/test/b/2')
  // }

  return (
    <>
      <span>index</span>
      <span>indexA</span>
    </>
  )
}