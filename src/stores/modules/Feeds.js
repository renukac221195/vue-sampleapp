import Vue from 'vue'
import Vuex from 'vuex'
import callService from '../../service';

Vue.use(Vuex)

export const loadAllUsersUpdates = {
  state: {
    feeds: [],
    newFeedList: []
  },
  getters: {
    allUserFeeds(state) {
      return state.feeds;
    },
    filterFeeds(state) {
      return state.newFeedList;
    }
  },
  actions: {
    fetchAllUserFeeds({
      commit
    }, url) {
      return new Promise((resolve, reject) => {
        callService(url)
          .then((response) => {
            resolve(response.data.feeds);
            commit('fetchFeeds', response.data.feeds);
          }).catch((error) => {
            reject(error);
          })
      })
    },
    searchFeeds({
      commit,
      state
    }, searchKey) {
      let searchedData = state.allFeeds.filter(f => {
        return searchKey == "" || f.title.indexOf(searchKey) > -1
      })
      commit('searchFeeds', searchedData);
    },
  },
  mutations: {
    fetchFeeds(state, response) {
      state.feeds = response;
      state.allFeeds = response;
    },
    searchFeeds(state, searchedData) {
      state.feeds = searchedData;
    },

  }
}
