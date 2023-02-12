import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    ...modules
  }
})

window.store = store;

export default store;