import Vue from 'vue'
import Vuex from 'vuex'
import callService from '../../service';

Vue.use(Vuex)

export const loadUser = {
    state:
    {
        user: []
    },
    getters: {
        userLogin(state) {
            return state.user;
        }
    },
    actions: {
        onLogin: (context, url) => {
            return new Promise((resolve) => {
                callService(url)
                    .then((response) => {
                        resolve(response);
                        context.commit('onLogin', response.data.user);
                    })
            })
        }
    },
    mutations: {
        onLogin: (state, response) => {
            // console.log(response);
            
            state.user = response;
        }
    }
}