import Vue from 'vue'
import App from './App.vue'
import vaxios from 'vue-axios'
import axios from 'axios'

Vue.use(axios)
Vue.use(vaxios)

new Vue({
  el: '#app',
  render: h => h(App)
})
