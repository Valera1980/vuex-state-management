import axios from 'axios';
import filterProducts from '../../products/filter-products';

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
  },
  actions: {
    registerUser(context, user) {
      axios.post('/api/register', user)
        .then((result) => context.commit('setUser', result.data));
    },
    signInUser(context, userLogin) {
      axios.post('/api/sign-in', userLogin)
        .then((result) => context.commit('setUser', result.data));
    },
  },
};
