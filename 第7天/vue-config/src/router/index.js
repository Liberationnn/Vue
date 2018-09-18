import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';

Vue.use(VueRouter); // 引入router必须使用use，注册一些全局的内容

let router = new VueRouter({
  routes: [
    {path: '/home', component: Home},
    {path: '/list', component: List}
  ]
});

export default router;