let getters = {
  hasSelectedAll: (state) => {
    return Object.values(state.car).every((item) => item.isSelected);
  },
  total: (state) => {
    return Object.values(state.car).reduce((prev, cur) => {
      return prev + (cur.isSelected ? cur.book.bookPrice * cur.count : 0);
    }, 0).toFixed(2);
  },
};

export default getters;
