import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const loadDoubleClickedFeed = {
  state: {
    newFeed: []
  },
  getters: {
    getClickedFeed(state) {
        return state.newFeed;
    }
  },
  actions: {
    fetchDoubleClickedFeed({commit}, currentDoubleClickedFeed) {
      commit('fetchDoubleClickedFeed', currentDoubleClickedFeed);
    }
  },
  mutations: {
    fetchDoubleClickedFeed(state, response) {
        state.newFeed = response;
    } 
  }
}
