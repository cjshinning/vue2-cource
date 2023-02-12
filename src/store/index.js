import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    ...modules
  }
})

console.log(store.state);
window.store = store;

export default store;