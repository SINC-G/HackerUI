import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: null,
    token: null
  },
  mutations: {
    logined(state, token) {
      state.isLogin = true
      state.isLogin = token
    },
    updateUser(state, userinfo) {
      state.user = userinfo
    },
    logout(state) {
      state.isLogin = false
      state.user = null
    },
  },
  actions: {
  },
  modules: {
  }
})
