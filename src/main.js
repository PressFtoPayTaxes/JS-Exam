import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuex from 'vuex'
import store from './storage'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
