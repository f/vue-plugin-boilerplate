import Vue from 'vue';
import Vuex from 'vuex';
import VuePlugin from '@/vue-plugin';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VuePlugin);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  myPluginSettings: new VuePlugin(),
  render: createElement => createElement(App)
});
