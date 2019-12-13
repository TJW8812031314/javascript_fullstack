import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import BookShelf from '@/components/bookshelf/bookShelf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/BookShelf',
      name: 'BookShelf',
      component: BookShelf
    }
  ]
})
