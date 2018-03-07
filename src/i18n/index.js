import Vue from 'vue'
// import config from '@/config'
import VueI18n from 'vue-i18n'
// import helper from '../helper'
// import axios from 'axios'
// import store from '@/store'

const locales = ['en-US', 'es']

Vue.use(VueI18n)




let messages = {}
// locales.forEach(v => {
//   messages[v] = require(`./${v}/index`).default
// })
// messages = store.state.propertiesStore.properties

const i18n = new VueI18n({
  // locale: helper.ls.get('locale', "es"),
  // locale: "es",
  silentTranslationWarn: true,
  messages,
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    'EUR': {
      currency: {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol'
      }
    }
  }
})


export default i18n
