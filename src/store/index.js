import { createStore } from 'vuex';
import axios from 'axios';
import filterProducts from '../products/filter-products';

const store = createStore({
  state() {
    return {
      user: null,
      products: null,
      cartItems: [],
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addToCart(state, product) {
      state.cartItems = [...state.cartItems, product];
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
  },
  actions: {
    fetchProducts(context) {
      axios.get('/api/products')
        .then((result) => context.commit('setProducts', result.data));
    },
    registerUser(context, user) {
      axios.post('/api/register', user)
        .then((result) => context.commit('setUser', result.data));
    },
    signInUser(context, userLogin) {
      axios.post('/api/sign-in', userLogin)
        .then((result) => context.commit('setUser', result.data));
    },
  },
});

export default store;
