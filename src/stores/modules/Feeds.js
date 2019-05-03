import Vue from 'vue'
import Vuex from 'vuex'
import callService from '../../service';

Vue.use(Vuex)

export const loadFeeds = {
    state:
    {
        feeds: []
    },
    getters: {
        clickedFeed(state) {
            return state.feeds;
        }
    },
    actions: {
        goToFeeds: (context, url) => {
            return new Promise((resolve) => {
                callService(url)
                    .then((response) => {
                        resolve(response);
                        context.commit('goToFeeds', response.data.feeds);
                    })
            })
        }
    },
    mutations: {
        goToFeeds: (state, response) => {
            state.feeds = response;
        }
    }
}