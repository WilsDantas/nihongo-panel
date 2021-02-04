require('./bootstrap')
import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import BaseTemplate from './layouts/BaseTemplate'

Vue.component('preloader-component', () => import('./components/PreLoader'))
Vue.config.productionTip = false

new Vue({
  render: h => h(BaseTemplate),
  router,
  store,
  vuetify,
}).$mount('#app')

store.dispatch('checkLogin')
  .then(() => '')
  .catch(() => router.push({ name: 'login' }))