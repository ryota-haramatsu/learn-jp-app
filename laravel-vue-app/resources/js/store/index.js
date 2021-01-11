import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'

// this.$storeをグローバルに使用できる
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store