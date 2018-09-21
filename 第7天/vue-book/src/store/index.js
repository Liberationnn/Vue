import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {car: {}},
  getters,
  mutations,
  plugins: [logger()],
});

export default store;
