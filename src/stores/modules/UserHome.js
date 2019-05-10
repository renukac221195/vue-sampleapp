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
            let newFeedList = [];
            let separateTypeSearch = [];
            let info = context.state.newFeedList.pages;
            console.log(context.state.newFeedList,"1", info);
            let searchedData = info.filter(f=>f.title.indexOf(data.str)>-1);

            console.log(searchedData)
            // let temp = null;
            // let currentSearch = info.map(item => {
            //     return item.type.match(data.str);
            // })
            
            // separateTypeSearch = info.filter(item => {
            //     let feedSearch = item.pages;
            //     console.log("2", feedSearch);
            //     return feedSearch.forEach(element => {
            //         temp = element.title.match(data.str);
                    
            //         return element.title.match(data.str);
            //         // if (item.pages != undefined) {
            //         //     console.log("3", data.str);
            //         //     separateTypeSearch.push(item);
            //         // }
            //     // }
            //     })
                // return item.pages;
            // });
        //     console.log(temp)
        //     newFeedList = separateTypeSearch;
        //     console.log("4", newFeedList);
        //     context.commit('fetchSearchedItem', newFeedList);
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