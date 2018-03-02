import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    currentPage: {},
    currentProperty: {},
    currentPageParts: {},
    properties: {},
    displaySettings: {},
    agencyMapMarker: {}
  },
  actions: {
    loadProperty: function({ commit }, propertyId) {
      let apiUrl = '/api_public/v1/en/properties/' + propertyId
      axios.get(apiUrl).then((response) => {
        commit('setCurrentProperty', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    loadPage: function({ commit }, pageName) {
      let apiUrl = '/api_public/v1/en/pages/' + pageName
      axios.get(apiUrl).then((response) => {
        commit('setPageContent', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    loadSettings: function({ commit }) {
      axios.get('/api_public/v1/display_settings').then((response) => {
        commit('setDisplaySettings', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
  },
  mutations: {
    setDisplaySettings: (state, { result }) => {
      state.displaySettings = result.display_settings
      state.agencyMapMarker = result.agency_map_marker
    },
    setCurrentProperty: (state, { result }) => {
      state.currentProperty = result.property
    },
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
