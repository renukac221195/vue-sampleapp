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
    fetchUserList({
      commit
    }, url) {
      return new Promise((resolve,reject) => {
        callService(url)
          .then((response) => {
            resolve(response);
            commit('fetchUserList', response.data.user);
          }).catch((error) => {
            reject(error);
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
    fetchUserList: (state, response) => {
      state.user = response;
    },
    setCurrentUser: (state, response) => {
      state.currentUserData = response;
    }
  }
}
