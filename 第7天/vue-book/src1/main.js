import Vue from 'vue';
import App from './App';
import store from './store';

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store, // store被注册到了实例上，在组件中通过this.$store访问
});
