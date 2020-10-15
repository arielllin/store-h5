import Vue from 'vue'
import Vuex from 'vuex'

// getters
import getters from '@/store/getters'

import app from '@/store/modules/app'
import login from '@/store/modules/login'
import cuisines from '@/store/modules/cuisines'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    login,
    cuisines
  },
  getters
})
