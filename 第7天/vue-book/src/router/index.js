import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../components/Home');
const List = () => import('../components/List');
const Add = () => import('../components/Add');
const Collect = () => import('../components/Collect');
const Detail = () => import('../components/Detail');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home, meta: {keepAlive: true, title: '首页'}},
    {path: '/list', component: List, meta: {title: '列表页'}},
    {path: '/detail/:id', component: Detail, name: 'detail', meta: {title: '详情页'}},
    {path: '/add', component: Add, meta: {title: '添加页'}},
    {path: '/collect', component: Collect, meta: {title: '收藏页'}},
    {path: '*', redirect: '/home'}
  ]
});
