import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger'; // logger是一个日志插件
import state from './state';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

// 容器唯一
let store = new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [logger()],
  strict: true, // 设置只能通过mutation(管理员)来更改状态，mutation不支持异步
});

export default store;
