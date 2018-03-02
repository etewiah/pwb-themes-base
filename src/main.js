// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
// import i18n from './i18n/'
// import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCPorm8YzIaUGhKfe5cvpgofZ_gdT8hdZw',
    // libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.use(Vuetify, {
  theme: {
    //   primary: '#ee44aa',
    //   secondary: '#424242',
    //   accent: '#82B1FF',
    //   error: '#FF5252',
    //   info: '#2196F3',
    //   success: '#4CAF50',
    //   warning: '#FFC107'
    // }
    // {
    primary: "#8E24AA",
    secondary: "#e57373",
    accent: "#9c27b0",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
