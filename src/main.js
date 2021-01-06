import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import IdleVue from 'idle-vue'

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;
const eventsHub = new Vue();

Vue.use(VeeValidate);
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 10000
});

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');