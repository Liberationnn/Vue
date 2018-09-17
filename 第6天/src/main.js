import Vue from 'vue'; // 这样直接引用的不是vue.js，而是vue的runtime
import App from './App.vue';

new Vue({
  el: '#app',
  render: (createElement) => createElement(App)
});


// new Vue({
//   el: '#app',
//   // render函数的作用是将虚拟dom渲染成真实的dom
//   // createElement返回的是虚拟的dom
//   render: function (createElement) {
//     return createElement(App);
//   }
// });