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
    fetchAllUserFeeds(context, url) {
      return new Promise((resolve) => {
        callService(url)
          .then((response) => {
            resolve(response.data.feeds);
            context.commit('fetchFeeds', response.data.feeds);
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
