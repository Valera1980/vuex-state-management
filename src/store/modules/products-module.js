import axios from 'axios';
import filterProducts from '../../products/filter-products';

export default {
  namespaced: true,
  state() {
    return {
      products: null,
      cartItems: [],
    };
  },
  mutations: {
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
  },
};
