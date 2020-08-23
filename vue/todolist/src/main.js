import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Todos from './components/Todos'
import About from './components/About'
import Parent from './components/communication/parent'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Todos},
    {path: '/about', component: About},
    {path: '/parent', component: Parent}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
