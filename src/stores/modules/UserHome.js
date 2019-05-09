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
        },
        clickedFeed(state) {
            return state.feeds;
        },
        getSearchedItem(state) {
            return state.feeds;
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
        goToFeeds: (context, url) => {
            return new Promise((resolve) => {
                callService(url)
                    .then((response) => {
                        resolve(response);
                        context.commit('goToFeeds', response.data.feeds);
                    })
            })
        },
        fetchSearchedItem: (context, data) => {
            // console.log(data.str)
            let info = context.state.newFeedList;
            let currentSearch = info.map(item => {
                // console.log(item.type);
                return item.type.match(data.str);
            })
            console.log(currentSearch);
            context.commit('fetchSearchedItem', currentSearch);
        }
    },
    mutations: {
        fetchAllUserFeeds: (state, response) => {
            state.feeds = response;
        },
        fetchTypeOfFeeds: (state, response) => {
            state.newFeedList = response;
        },
        goToFeeds: (state, response) => {
            state.feeds = response;
        },
        fetchSearchedItem: (state, response) => {
            state.feeds = response;
        }
    }
}