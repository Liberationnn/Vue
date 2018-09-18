import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import List from '../components/List';
import Add from '../components/Add';
import Collect from '../components/Collect';
import Detail from '../components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/list', component: List},
    {path: '/detail/:id', component: Detail, name: 'detail'},
    {path: '/add', component: Add},
    {path: '/collect', component: Collect},
    {path: '*', redirect: '/home'}
  ]
});
