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
    properties: []
  },
  actions: {
    loadPage: function({ commit }) {
      axios.get('/api_public/v1/home').then((response) => {
        commit('setPageContent', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
  },
  mutations: {
    setPageContent: (state, { result }) => {
      state.currentPage = result.page
      state.currentPageParts = result.page_parts
      state.properties = result.properties
    }
  },
  getters: {

  }
})
export default store
