import Vue from 'vue';
import VuePlugin from '@/vue-plugin';

import App from './App.vue';

Vue.use(VuePlugin);

new Vue({
  el: '#app',
  myPluginSettings: new VuePlugin(),
  render: createElement => createElement(App)
});
