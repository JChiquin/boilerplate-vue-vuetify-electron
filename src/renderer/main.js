import Vue from 'vue'
import Vuetify from 'vuetify'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(vueResource) // Ensure you are using css-loader

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
