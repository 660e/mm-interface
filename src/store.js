import { createStore } from 'vuex';

export default createStore({
  state: {
    active: ''
  },
  getters: {
    active: state => state.active
  },
  mutations: {
    active: (state, n) => (state.active = n)
  },
  actions: {},
  modules: {}
});
