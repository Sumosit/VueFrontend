import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import IdleVue from 'idle-vue'
import $ from "jquery";
window.jQuery = window.$ = $;

Vue.config.productionTip = false;
const eventsHub = new Vue();

Vue.use(VeeValidate);
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 1000000
});

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');