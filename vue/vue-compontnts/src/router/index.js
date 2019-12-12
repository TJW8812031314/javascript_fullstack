import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' 
// import A from '@/components/pages/a'
// import Parent from '@/components/views/parent'
// import Form from '@/components/form/form'
// import Show from '@/components/form/show'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'Parent',
    //   component: Parent
    // }
    // {
    //   path: '/',
    //   name: 'Form',
    //   component: Form
    // },
    // {
    //   path: '/',
    //   name: 'Show',
    //   component: Show
    // }
      {
      path: '/',
      name: 'Display',
      component: Display
    }
  ]
})
