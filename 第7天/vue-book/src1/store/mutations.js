import * as Types from './mutations-types';

let mutations = {
  [Types.INCREASE](state, step = 1) { // state是自动放入的，默认指当前state
    state.count += step;
  },
  [Types.DECREASE](state, step = 1) {
    state.count -= step;
  },
};

export default mutations;
