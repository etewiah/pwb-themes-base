import axios from 'axios'

// initial state
const state = {
  propertyEnquiryErrors: [],
  propertyEnquirySuccess: ""
}

// getters
const getters = {}

// actions
const actions = {
  sendPropertyEnquiry: function({ commit }, enquiryData) {
    commit('setPropertyEnquiry', { result: "reset" })
    let apiUrl = this.getters.baseApiUrl + '/request_property_info'
    axios.post(apiUrl, {
      contact: enquiryData
    }, {
      // headers: {
      //   // 'Content-Type': 'application/vnd.api+json',
      //   // 'Accept': 'application/vnd.api+json'
      // }
    }).then(response => {
      commit('setPropertyEnquiry', { result: response.data })
    }, (err) => {
      console.log(err)
    })
  },
}

// mutations
const mutations = {
  setPropertyEnquiry: (state, { result }) => {
    if (result === "reset") {
      state.propertyEnquiryErrors = []
      state.propertyEnquirySuccess = ""
      return
    }
    if (result.success) {
      state.propertyEnquirySuccess = result.success_message
    } else {
      state.propertyEnquiryErrors = result.errors || []
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
