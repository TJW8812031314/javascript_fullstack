import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login  from '@/components/Login'
import Mine from '@/components/Mine'
import Detail from '@/components/detail'
import Mine2 from '@/components/mine2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      childern:[
        {
          path:'Mine2',
          name: 'Mine2',
          component: Mine2

      }
    ]
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
