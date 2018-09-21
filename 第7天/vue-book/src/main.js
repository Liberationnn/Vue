// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';

// 图片懒加载插件 (在列表页删除图书时会造成图片显示错误的问题，将key值设为图片地址可以解决此问题)
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://bpic.588ku.com/element_origin_min_pic/18/06/10/ae11aa680c0c9b92c69afb2cc1149453.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
});

// 每次进入路由前都会执行此方法
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // 可以设置拦截，当访问/list的时候会拦截并跳转到/add
  // if (to.path === '/list') {
  //   next({path: '/add'});
  // }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
