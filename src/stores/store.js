import Vue from 'vue'
import Vuex from 'vuex'
import { loadUser } from './modules/LoginForm.js'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        loadUser
    }
})