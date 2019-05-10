import Vue from 'vue'
import Vuex from 'vuex'
import callService from '../../service';

Vue.use(Vuex)

export const loadUser = {
  state: {
    user: [],
    currentUserData: null,
  },
  getters: {
    userLogin(state) {
      return state.user;
    },
    getCurrentUserData(state) {
        return state.currentUserData;
    }
  },
  actions: {
    onLogin(context, url) {
      return new Promise((resolve) => {
        callService(url)
          .then((response) => {
            resolve(response);
            context.commit('onLogin', response.data.user);
          })
      })
    },
    setCurrentUser({
      commit,
      state
    }, currentUser) {
      let currentUserData = state.user.find(element => {
        return element.userId === currentUser;
      });
      commit('setCurrentUser', currentUserData);
    }
  },
  mutations: {
    onLogin: (state, response) => {
      state.user = response;
    },
    setCurrentUser: (state, response) => {
      state.currentUserData = response;
    }
  }
}
