import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import getItemSkuId from './detail'
Vue.use(Vuex)
export default new Vuex.Store({

  modules: {
    home,
    search,
    getItemSkuId
  }
})
 