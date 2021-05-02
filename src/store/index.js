import { createStore } from 'vuex';
import ProductsModule from './modules/products-module';
import UsersModule from './modules/user-module';

const store = createStore({
  modules: {
    products: ProductsModule,
    users: UsersModule,
  },
  state() {
    return {

    };
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  },
});

export default store;
