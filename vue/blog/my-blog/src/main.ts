import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Button, Select, Layout } from "element-ui";
import Element from 'element-ui'
import service from './utils/http'
import urls from './utils/urls'

// Vue.use(Button).use(Select).use(Layout)
Vue.use(Element)
Vue.prototype.$https = service
Vue.prototype.$urls = urls

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
