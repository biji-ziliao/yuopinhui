import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/Element-ui/index';
import "./mock/mockServe";
import pagnation from "./components/pagnation";
Vue.component('pagnation', pagnation)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

