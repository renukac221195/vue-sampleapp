import Vue from 'vue'
import Vuex from 'vuex'
import callService from '../../service';

Vue.use(Vuex)

export const loadAllUsersUpdates = {
    state:
    {
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
        fetchAllUserFeeds: (context, url) => {
            return new Promise((resolve) => {
                callService(url)
                    .then((response) => {
                        resolve(response);
                        context.commit('fetchAllUserFeeds', response.data.feeds);
                    })
            })
        },
        fetchTypeOfFeeds: (context, url) => {
            return new Promise((resolve) => {
                callService(url)
                    .then((response) => {
                        resolve(response);
                        context.commit('fetchTypeOfFeeds', response.data.feeds);
                    })
            })
        },
    },
    mutations: {
        fetchAllUserFeeds: (state, response) => {
            state.feeds = response;
        },
        fetchTypeOfFeeds: (state, response) => {
            state.newFeedList = response;
        }
    }
}