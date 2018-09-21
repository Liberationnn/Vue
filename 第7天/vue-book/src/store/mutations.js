import * as Types from './mutations-types';

let mutations = {
  [Types.ADD](state, book) {
    let temp = Object.assign({}, state.car);
    if (!temp[book.bookName]) {
      temp[book.bookName] = {book, count: 1, isSelected: true};
    } else {
      temp[book.bookName].count += 1;
    }
    state.car = temp;
  },
  [Types.REMOVE](state, book) {
    let temp = Object.assign({}, state.car);
    delete temp[book.bookName];
    state.car = temp;
  },
  [Types.INCREASE](state, book) {
    let temp = Object.assign({}, state.car);
    temp[book.bookName].count += 1;
    state.car = temp;
  },
  [Types.DECREASE](state, book) {
    if (state.car[book.bookName].count > 1) {
      let temp = Object.assign({}, state.car);
      temp[book.bookName].count -= 1;
      state.car = temp;
    }
  },
  [Types.CLICKALL](state, value) {
    let temp = Object.assign({}, state.car);
    for (let key in temp) {
      if (temp.hasOwnProperty(key)) {
        temp[key].isSelected = value;
      }
    }
    state.car = temp;
  },
  [Types.CLICKONE](state, book) {
    let temp = Object.assign({}, state.car);
    temp[book.bookName].isSelected = !temp[book.bookName].isSelected;
    state.car = temp;
  },
};

export default mutations;
