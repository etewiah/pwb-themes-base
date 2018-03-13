import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { app } from '../main'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    currentLocale: "nl",
    currentCurrency: "usd",
    baseCurrency: "usd",
    currentPage: {},
    currentProperty: {},
    currentPageParts: {},
    summaryProperties: {},
    propSearchResults: [],
    displaySettings: {},
    agencyMapMarker: {},
    searchFieldOptions: {},
    // TODO: use below to refresh settings when true
    lastLoadedFromLS: false
  },
  actions: {
    // loadSearchPage: function({ commit }, saleOrRent) {
    //   let fieldNames = "property-origins, property-types, property-states, property-labels"
    //   axios.get('/api/v1/select_values', {
    //     params: {
    //       field_names: fieldNames
    //     }
    //   }).then((response) => {
    //     // this data isn't monitored so setting it directly
    //     // state.fieldOptions = response.data
    //     // commit('setProperties', { result: response.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
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
    loadSearchPage: function({ commit }, searchParams) {
      let apiUrl = this.getters.baseApiUrl + '/search_page' 
      axios.get(apiUrl, {
        params: searchParams
      }).then((response) => {
        commit('setSearchPageContent', { result: response.data })
        commit('setSearchResults', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    updateSearch: function({ commit }, searchParams) {
      let apiUrl = this.getters.baseApiUrl + '/properties/search'
      axios.get(apiUrl, {
        params: searchParams
      }).then((response) => {
        commit('setSearchResults', { result: response.data })
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
      state.searchFieldOptions = result.search_field_options
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
    setSearchPageContent: (state, { result }) => {
      state.currentPage = result.page
      state.currentPageParts = result.page_parts
    },
    setSearchResults: (state, { result }) => {
      state.propSearchResults = result.prop_search_results
    },
    setPageContent: (state, { result }) => {
      state.currentPage = result.page
      state.currentPageParts = result.page_parts
      state.summaryProperties = result.properties
    }
  },
  getters: {
    baseApiUrl: state => {
      // console.log(process.env.API_URL_BASE)
      return process.env.API_URL_BASE + '/api_public/v1/' + state.currentLocale
    }
  }
})
export default store
