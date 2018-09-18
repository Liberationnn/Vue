import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';

new Vue({
  el: '#app',
  render: (createElement) => createElement(App),
  router
});