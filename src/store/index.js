import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  },
  state: {
    currentPage: {},
    currentPageParts: {},
  },
  actions: {
    loadPage: function({ commit }) {
      axios.get('/api_public/v1/home').then((response) => {
        commit('setPage', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
  },
  mutations: {
    setPage: (state, { result }) => {
      state.currentPage = result.page
      state.currentPageParts = result.page_parts
    }
  },
  getters: {

  }
})
export default store
