import Vue from 'vue'
import VueAwesome from 'vue-awesome'
import App from './App'
import router from './router'

import sess from '@/library/session';
import common from '@/library/common';

import './assets/style/common.scss'

Vue.component('icon', VueAwesome)

sess.setRouterSession(router);
Vue.use(common);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
