import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { app } from '../main'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    currentLocale: "nl",
    currentPage: {},
    currentProperty: {},
    currentPageParts: {},
    properties: {},
    displaySettings: {},
    agencyMapMarker: {},
  },
  actions: {
    loadProperty: function({ commit }, propertyId) {
      let apiUrl = this.getters.baseApiUrl + '/properties/' + propertyId
      axios.get(apiUrl).then((response) => {
        commit('setCurrentProperty', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    loadPage: function({ commit }, pageName) {
      let apiUrl = this.getters.baseApiUrl + '/pages/' + pageName
      axios.get(apiUrl).then((response) => {
        commit('setPageContent', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    loadSettings: function({ commit }) {
      let apiUrl = this.getters.baseApiUrl + '/client_settings'
      axios.get(apiUrl).then((response) => {
        commit('setClientSettings', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
  },
  mutations: {
    setCurrentLocale: (state, locale) => {
      state.currentLocale = locale
    },
    setClientSettings: (state, { result }) => {
      state.displaySettings = result.display_settings
      state.agencyMapMarker = result.agency_map_marker
      // state.phrases = result.phrases
      // console.log(app.$i18n.messages.es)
      // app.$i18n.messages.es = result.translations
      let locale = state.currentLocale
      app.$i18n.setLocaleMessage(locale, result.translations)
      app.$i18n.locale = locale
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
    baseApiUrl: state => {
      return '/api_public/v1/' + state.currentLocale 
    }
  }
})
export default store
