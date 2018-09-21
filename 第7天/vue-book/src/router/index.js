import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../components/Home');
const List = () => import('../components/List');
const Detail = () => import('../components/Detail');
const Add = () => import('../components/Add');
const Shopping = () => import('../components/Shopping');
const Pay = () => import('../components/Pay');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home, meta: {keepAlive: false, title: '首页'}},
    {path: '/list', component: List, meta: {title: '列表页'}},
    {path: '/detail/:id', component: Detail, name: 'detail', meta: {title: '详情页'}},
    {path: '/add', component: Add, meta: {title: '添加页'}},
    {path: '/shopping', component: Shopping, meta: {title: '购物车'}},
    {path: '/pay', component: Pay, meta: {title: '结算'}},
    {path: '*', redirect: '/home'}
  ]
});
