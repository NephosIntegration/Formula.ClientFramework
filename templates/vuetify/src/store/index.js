/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import layoutStore from './modules/layoutStore';

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    layout: layoutStore,
  },
  mutations,
  state
})

export default store
